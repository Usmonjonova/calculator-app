function init() {
    const themeSwitcherControlWrap = document.querySelector('.theme__control-wrapper')


    function switchTheme() {
        const elRoot = document.documentElement
        let dataTheme = themeSwitcherControlWrap.querySelector('input:checked').value;

        let newTheme = ' '

        if (dataTheme === 'light') {
            newTheme = 'light';
        } else if (dataTheme === 'dark') {
            newTheme = 'dark'
        } else if (dataTheme === 'vintage') {
            newTheme = 'vintage'
        }

        elRoot.setAttribute('data-theme', newTheme)

        localStorage.setItem('theme', newTheme)
    }

    if (themeSwitcherControlWrap) {
        themeSwitcherControlWrap.addEventListener('change', switchTheme)
    }

    const elCurrentTheme = document.documentElement.dataset.theme
    document.querySelector(`.theme__radio[value="${elCurrentTheme}"]`).setAttribute('checked', true)

}

document.addEventListener('DOMContentLoaded', init)