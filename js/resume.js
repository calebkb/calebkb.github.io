const url = '../resume/Caleb_Kartha_Bortles_Resume_Jan_20.pdf';

let pdfDoc = null,
    pageNum = 1,
    pageIsRendering = false,
    pagePending = null;

const scale = 15,
    canvas = document.querySelector('#pdf-render'),
    ctx = canvas.getContext('2d');

// Render the page
const renderPage = num => {
    pageIsRendering = true;

    // Get the page
    pdfDoc.getPage(num).then(page => {
        // Set scale

        const viewport = page.getViewport({ scale })
        
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        

        const renderCtx = {
            canvasContext: ctx,
            viewport
        }

        page.render(renderCtx).promise.then(() => {
            pageIsRendering = false;

            if(pagePending !== null) {
                renderPage(pagePending);
                pagePending = null;
            }
        });

        // Output current page
        document.querySelector('#page-num').textContent = num;
    });
};

// Check for pages rendering
const queueRenderPage = num => {
    if(pageIsRendering) {
        pagePending = num;
    } else {
        renderPage(num);
    }
}

// Show Previous Page
const showPrevPage = () => {
    if(pageNum <=1 ) {
        return;
    }
    pageNum--;
    queueRenderPage(pageNum);
}

// show next page
const showNextPage = () => {
    if(pageNum >= pdfDoc.numPages ) {
        return;
    }
    pageNum++;
    queueRenderPage(pageNum);
}

// Get Document
pdfjsLib.getDocument(url).promise.then(pdfDoc_ => {
    pdfDoc = pdfDoc_;

    // console.log(pdfDoc);
    
    document.querySelector('#page-count').textContent = pdfDoc.numPages;

    renderPage(pageNum)
});

// button events
document.querySelector('#prev-page').addEventListener('click', showPrevPage);
document.querySelector('#next-page').addEventListener('click', showNextPage);