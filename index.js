console.log('the javascript is running... catch it!')

// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
function AppViewModel() {
    this.firstName = "Nicole";
    this.lastName = "Zonnenberg";
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());