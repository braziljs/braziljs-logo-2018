function toggleHL (chkbx) {
    if (chkbx.checked) {
        document.querySelector('#braziljs-logo-wrapper').classList.add('highlighted');
    } else {
        document.querySelector('#braziljs-logo-wrapper').classList.remove('highlighted');
    }
}
function applyTheme (themeId) {
    let theTheme = window.listOfThemes[themeId];
    document.querySelector('.logo-container').className = 'logo-container ' + theTheme.className;
    if (theTheme.background) {
        document.body.style.background = theTheme.background;
        document.body.style.backgroundSize = 'cover';
    } else {
        document.body.style.background = '#444';
    }
    document.querySelector('.theme-description').innerHTML = theTheme.description || '';
    window.sessionStorage.setItem('lastSelectedTheme', themeId);

    // updating the color inputs
    const currentColors = [
        getComputedStyle(document.querySelector('.logo-j-j')).getPropertyValue('--color-primary'),
        getComputedStyle(document.querySelector('.logo-s')).getPropertyValue('--color-secondary'),
        getComputedStyle(document.querySelector('.logo-brazil')).getPropertyValue('--color-third')
    ];

    Array.from(document.querySelectorAll('.controllers input[type=color]'))
        .forEach((input, i) => {
            if (currentColors[i].match(/(^\#[0-f]{0,6})|^(rgba?\([0-9\, ]+\))/)) {
                // is an rgb(a) or hexa color
                input.value = currentColors[i];
                input.removeAttribute('disabled');
            } else {
                input.value = '#f0f0f0';
                input.setAttribute('disabled', true);
            }
        })
}
function applyPrimaryColor (val) {
    document.body.style.setProperty('--color-primary', val)
}
function applySecondaryColor (val) {
    document.body.style.setProperty('--color-secondary', val)
}
function applyThirdColor (val) {
    document.body.style.setProperty('--color-third', val)
}