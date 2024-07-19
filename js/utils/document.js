export const scrollToElementById = (elementId, headerHeight = 0) => {
    const element = document.getElementById(elementId);
    if (element) {
        const elementPosition =
            element.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth',
        });
    }
};
