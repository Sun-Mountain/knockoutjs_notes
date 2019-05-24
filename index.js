console.log('the javascript is running... catch it!')

// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
function AppViewModel() {
    // Basics
    this.firstName = ko.observable("Nicole");
    this.lastName = ko.observable("Zonnenberg");

    this.fullName = ko.computed(function() {
        return this.firstName() + " " + this.lastName();
    }, this);

    // Functions
    this.capitalizeLastName = function() {
        var currentVal = this.lastName();
        this.lastName(currentVal.toUpperCase());
    };

    this.lowercaseLastName = function() {
        var currentVal = this.lastName();
        this.lastName(currentVal.toLowerCase());
    };
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());