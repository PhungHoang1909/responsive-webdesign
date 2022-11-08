function whoWasChecked() {
    var radioButtons;
    var firstButton, secondButton;
    radioButtons = document.getElementsByName('q1');
    firstButton=radioButtons[0].checked;
    alert ("First button was checked: " + firstButton);

    radioButtons = document.getElementsByName('q1');
    secondButton=radioButtons[1].checked;
    alert ("Second button was checked: " + secondButton);
    }