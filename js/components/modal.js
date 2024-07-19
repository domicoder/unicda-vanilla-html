export const openModal = (id) => {
    const modal = document.getElementById(id);
    modal.style.display = 'block';
};

export const closeModal = (id) => {
    const modal = document.getElementById(id);
    modal.style.display = 'none';
};

export const closeModalOutside = (id) => {
    window.onclick = function (event) {
        const modal = document.getElementById(id);
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
};
