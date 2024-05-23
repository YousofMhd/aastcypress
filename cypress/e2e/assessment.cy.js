describe('Home page', () => {
    it('1- open the page', () => {
        cy.visit("https://www.automationexercise.com/")
        cy.title().should('eq', 'Automation Exercise')
    });
});
describe('Signup/Login page', () => {
    it('1- open the page', () => {
        cy.visit("https://www.automationexercise.com/login")
        cy.title().should('eq', 'Automation Exercise - Signup / Login')
    });
    it('2- signup input all valid fields', () => {
        cy.visit("https://www.automationexercise.com/login")
        cy.get('[name="name"]').type("Khadija")
        cy.get('[data-qa="signup-email"]').type("khadija15599@gmail.com")
    });
    it('3- signup input all valid fields and submit', () => {
        cy.visit("https://www.automationexercise.com/login")
        cy.get('[name="name"]').type("Khadija")
        cy.get('[data-qa="signup-email"]').type("khadija15599@gmail.com")
        cy.get('[data-qa="signup-button"]').click()
    });
    it('4- signup input invalid fields and submit', () => {
        cy.visit("https://www.automationexercise.com/login")
        cy.get('[name="name"]').type("7860")
        cy.get('[data-qa="signup-email"]').type("khadija15599gmailcom")
        cy.get('[data-qa="signup-button"]').click()
    });
    it('5- signup page all valid input', () => {
        cy.visit("https://www.automationexercise.com/login")
        cy.get('[name="name"]').type("Khadija")
        cy.get('[data-qa="signup-email"]').type("khadija15599@gmail.com")
        cy.get('[data-qa="signup-button"]').click()
        cy.get('#uniform-id_gender2').click()
        cy.get('#password').type("Khadija12341234")
        cy.get('[name="days"]').select(13)
        cy.get('[name="months"]').select(6)
        cy.get('[name="years"]').select('2001')
        cy.get('[name="first_name"]').type("Khadija")
        cy.get('[name="last_name"]').type("Abdelrahman")
        cy.get('[name="company"]').type("AAST")
        cy.get('[name="address1"]').type("123 Main St")
        cy.get('[name="address2"]').type("Apartment 123")
        cy.get('[name="country"]').select("United States")
        cy.get('[name="state"]').type("New York")
        cy.get('[name="city"]').type("New York")
        cy.get('[name="zipcode"]').type("09574")
        cy.get('[name="mobile_number"]').type("1234567890")
    });
    it('6- signup page all valid fields and submit', () => {
        cy.visit("https://www.automationexercise.com/login")
        cy.get('[name="name"]').type("Khadija")
        cy.get('[data-qa="signup-email"]').type("khadija15599@gmail.com")
        cy.get('[data-qa="signup-button"]').click()
        cy.get('#uniform-id_gender2').click()
        cy.get('#password').type("Khadija12341234")
        cy.get('[name="days"]').select(13)
        cy.get('[name="months"]').select(6)
        cy.get('[name="years"]').select('2001')
        cy.get('[name="first_name"]').type("Khadija")
        cy.get('[name="last_name"]').type("Abdelrahman")
        cy.get('[name="company"]').type("AAST")
        cy.get('[name="address1"]').type("123 Main St")
        cy.get('[name="address2"]').type("Apartment 123")
        cy.get('[name="country"]').select("United States")
        cy.get('[name="state"]').type("New York")
        cy.get('[name="city"]').type("New York")
        cy.get('[name="zipcode"]').type("09574")
        cy.get('[name="mobile_number"]').type("1234567890")
        cy.get('[data-qa="create-account"]').click()
    });
    it('7- signup page some valid fields and submit', () => {
        cy.visit("https://www.automationexercise.com/login")
        cy.get('[name="name"]').type("Khadija")
        cy.get('[data-qa="signup-email"]').type("khadija15599@gmail.com")
        cy.get('[data-qa="signup-button"]').click()
        cy.get('#uniform-id_gender2').click()
        cy.get('#password').type("Kh")
        cy.get('[name="days"]').select(13)
        cy.get('[name="months"]').select(6)
        cy.get('[name="years"]').select('2001')
        cy.get('[name="first_name"]').type("Khadija")
        cy.get('[name="last_name"]').type("8695")
        cy.get('[name="company"]').type("AAST")
        cy.get('[name="address1"]').type("123 Main St")
        cy.get('[name="address2"]').type("Apartment 123")
        cy.get('[name="country"]').select("United States")
        cy.get('[name="state"]').type("New York")
        cy.get('[name="city"]').type("New York")
        cy.get('[name="zipcode"]').type("jfhdj")
        cy.get('[name="mobile_number"]').type("1234567890")
        cy.get('[data-qa="create-account"]').click()
    });
    it('8- signup page input nothing and submit', () => {
        cy.visit("https://www.automationexercise.com/login")
        cy.get('[data-qa="signup-button"]').click()
        cy.get('body').should('be.exist')
    });
    it('9- login input all valid fields', () => {
        cy.visit("https://www.automationexercise.com/login")
        cy.get('[data-qa="login-email"]').type("Khadija15599@gmail.com")
        cy.get('[data-qa="login-password"]').type("Khadija12341234")
    });
    it('10- login input all valid fields and submit', () => {
        cy.visit("https://www.automationexercise.com/login")
        cy.get('[data-qa="login-email"]').type("Khadija15599@gmail.com")
        cy.get('[data-qa="login-password"]').type("Khadija12341234")
        cy.get('[data-qa="login-button"]').click()
    });
    it('11- login input invalid fields and submit', () => {
        cy.visit("https://www.automationexercise.com/login")
        cy.get('[data-qa="login-email"]').type("Khadija15599gmailcom")
        cy.get('[data-qa="login-password"]').type("Kh")
        cy.get('[data-qa="login-button"]').click()
    });
    it('12- login input 1 invalid fields and submit', () => {
        cy.visit("https://www.automationexercise.com/login")
        cy.get('[data-qa="login-email"]').type("Khadija15599gmailcom")
        cy.get('[data-qa="login-password"]').type("Khadija12341234")
        cy.get('[data-qa="login-button"]').click()
    });
});
describe('Products page', () => {
    it('1- open the page', () => {
        cy.visit("https://www.automationexercise.com/products")
        cy.title().should('eq', 'Automation Exercise - All Products')
    });
    it('2- search existing product', () => {
        cy.visit("https://www.automationexercise.com/products")
        cy.get('[name="search"]').type("Men Tshirt")
        cy.get('#submit_search').click()
    });
    it('3- search non-existing product', () => {
        cy.visit("https://www.automationexercise.com/products")
        cy.get('[name="search"]').type("Laptop")
        cy.get('#submit_search').click()
    });
});
describe('Contact us page', () => {
    it('1- open the page', () => {
        cy.visit("https://www.automationexercise.com/contact_us")
        cy.title().should('eq', 'Automation Exercise - Contact Us')
    });
    it('2- input all valid fields', () => {
        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type("Khadija")
        cy.get('[name="last_name"]').type("Abdelrahman")
        cy.get('[name="email"]').type("khadija15599@gmail.com")
        cy.get('[name="message"]').type("I have no idea what to type.")
    });
    it('3- input all valid fields and reset', () => {
        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type("Khadija")
        cy.get('[name="last_name"]').type("Abdelrahman")
        cy.get('[name="email"]').type("khadija15599@gmail.com")
        cy.get('[name="message"]').type("I have no idea what to type.")
        cy .get('.contact_button').first().click()
    });
    it('4- input all valid fields and submit', () => {
        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type("Khadija")
        cy.get('[name="last_name"]').type("Abdelrahman")
        cy.get('[name="email"]').type("khadija15599@gmail.com")
        cy.get('[name="message"]').type("I have no idea what to type.")
        cy.get('.contact_button').last().click()
        cy.url().should('include', 'contact-form-thank-you')
    });
    it('5- input 3 invalid fields and submit', () => {
        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type("7483")
        cy.get('[name="last_name"]').type("9988")
        cy.get('[name="email"]').type("khadijgmailcom")
        cy.get('[name="message"]').type("I have no idea what to type.")
        cy.get('.contact_button').last().click()
        cy.get('body').should('be.exist')
    });
    it('6- input invalid email and submit', () => {
        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type("Khadija")
        cy.get('[name="last_name"]').type("Abdelrahman")
        cy.get('[name="email"]').type("khadija15599gmail.com")
        cy.get('[name="message"]').type("I have no idea what to type.")
        cy.get('.contact_button').last().click()
       // cy.contains("all fields are required").should('be.exist')
    });
    it('7- input 2 valid fields and submit', () => {
        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type("Khadija")
        cy.get('[name="last_name"]').type("Abdelrahman")
        cy.get('.contact_button').last().click()
        cy.get('body').should('be.exist')
    });
    it('8- input nothing and submit', () => {
        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('.contact_button').last().click()
        cy.contains("all fields are required").should('be.exist')
    });
});
// Amr Khaled Test Cases - Reg: 20109403
describe('Contact Page', () => {
    it('Visit Page', () => {
        cy.visit("https://automationexercise.com/contact_us")
        cy.title().should('eq', 'Automation Exercise - Contact Us');
    });
});

describe('Contact Page', () => {
    it('Contact Us - Valid Form', () => {
        cy.visit("https://www.automationexercise.com/contact_us")
        cy.get('#susbscribe_email').type("morakhaled@gmail.com")
        cy.get('#subscribe').click()
    });
});

describe('Contact Page', () => {
    it('Contact Us - Valid Form', () => {
        cy.visit("https://www.automationexercise.com/contact_us")
        cy.get('#susbscribe_email').type("xyz@111.com")
        cy.get('#subscribe').click()
    });
});


describe('Contact Page', () => {
    it('Contact Us - Valid Form', () => {
        cy.visit("https://www.automationexercise.com/contact_us")
        cy.get('[name="name"]').type("Amr")
        cy.get('[data-qa="email"]').type("morakhaled@gmail.com")
        cy.get('[data-qa="subject"]').type("Testing")
        cy.get('[data-qa="message"]').type("Hello World!");
    });
});

describe('Contact Page', () => {
    it('Contact Us - Invalid Name, Email', () => {
        cy.visit("https://www.automationexercise.com/contact_us")
        cy.get('[name="name"]').type("9999")
        cy.get('[data-qa="email"]').type("hello@xyz.com")
        cy.get('[data-qa="subject"]').type("0xbnnsbnshg2")
        cy.get('[data-qa="message"]').type("///////");
    });
});

describe('Product Page', () => {
    it('Product Test 1', () => {
        cy.visit("https://automationexercise.com/products")
        cy.title().should('eq', 'Automation Exercise - All Products')
        cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click()
        cy.get('#quantity').type("5")
        cy.get(':nth-child(5) > .btn').click()
        cy.get('u').click();
    });
});

describe('Product Page', () => {
    it('Product Test 2', () => {
        cy.visit("https://automationexercise.com/products")
        cy.title().should('eq', 'Automation Exercise - All Products')
        cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
    });
});

describe('Product Page', () => {
    it('Product Test 3', () => {
        cy.visit("https://automationexercise.com/products")
        cy.title().should('eq', 'Automation Exercise - All Products')
        cy.get('#search_product').click()
        cy.get('#search_product').type("Blue Top")
        cy.get('#submit_search').click();
    });
});

describe('Product Page', () => {
    it('Product Test 4', () => {
        cy.visit("https://automationexercise.com/products")
        cy.title().should('eq', 'Automation Exercise - All Products')
        cy.get('#search_product').click()
        cy.get('#search_product').type("Hello")
        cy.get('#submit_search').click();
    });
});

describe('Product Page', () => {
    it('Product Test 5', () => {
        cy.visit("https://automationexercise.com/products")
        cy.title().should('eq', 'Automation Exercise - All Products')
        cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click()
        cy.get('#quantity').type("999999")
        cy.get(':nth-child(5) > .btn').click();
    });
});

describe('Product Page', () => {
    it('Product Test 6', () => {
        cy.visit("https://automationexercise.com/products")
        cy.title().should('eq', 'Automation Exercise - All Products')
        cy.get(':nth-child(4) > .product-image-wrapper > .choose > .nav > li > a').click()
        cy.get('#name').type("Amr")
        cy.get('#email').type("morakhaled@gmail.com")
        cy.get('#review').type("Hello World!")
        cy.get('#button-review').click();
    });
});

describe('Product Page', () => {
    it('Product Test 7', () => {
        cy.visit("https://automationexercise.com/products")
        cy.title().should('eq', 'Automation Exercise - All Products')
        cy.get(':nth-child(4) > .product-image-wrapper > .choose > .nav > li > a').click()
        cy.get('#name').type("0000")
        cy.get('#email').type("xyz@xyz.com")
        cy.get('#review').type("!////2")
        cy.get('#button-review').click();
    });
});

describe('Product Page', () => {
    it('Product Test 8', () => {
        cy.visit("https://automationexercise.com/products")
        cy.get(':nth-child(7) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('.modal-footer > .btn').click()
        cy.get('u');
    });
});

describe('Product Page', () => {
    it('Product Test 9', () => {
        cy.visit("https://automationexercise.com/products")
        cy.get(':nth-child(7) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('.modal-footer > .btn').click()
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
    });
});

describe('Product Page', () => {
    it('Product Test 10', () => {
        cy.visit("https://automationexercise.com/products")
        cy.get(':nth-child(7) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('.modal-footer > .btn').click()
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
        cy.get('.cart_quantity_delete').click();
    });
});

describe('Product Page', () => {
    it('Product Test 11', () => {
        cy.visit("https://automationexercise.com/products")
        cy.get(':nth-child(7) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('.modal-footer > .btn').click()
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
        cy.get('.col-sm-6 > .btn').click();
    });
});

describe('Products', () => {
    it('Product Test 12', () => {
        cy.visit("https://automationexercise.com/")
        cy.get(':nth-child(7) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('.modal-footer > .btn').click()
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
        cy.get('.col-sm-6 > .btn').click();
    });
});

describe('Products', () => {
    it('Product Test 13', () => {
        cy.visit("https://automationexercise.com/login")
        cy.get('[data-qa="login-email"]').type("mora@gmail.com")
        cy.get('[data-qa="login-password"]').type("mora2002")
        cy.get('[data-qa="login-button"]').click()
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
    });
});

describe('Products', () => {
    it('Product Test 14', () => {
        cy.visit("https://automationexercise.com/")
        cy.get('.nav > :nth-child(4)')
        cy.visit("https://automationexercise.com/login")
        cy.get('[data-qa="login-email"]').type("mora@gmail.com")
        cy.get('[data-qa="login-password"]').type("mora2002")
        cy.get('[data-qa="login-button"]').click()
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
        cy.get(':nth-child(7) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('.modal-footer > .btn').click()
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
        cy.get('.col-sm-6 > .btn').click()
        cy.get('.form-control').type("comment")
        cy.get(':nth-child(7) > .btn').click()
    });
});

describe('Products', () => {
    it('Product Test 15', () => {
        cy.visit("https://automationexercise.com/")
        cy.get('.nav > :nth-child(4)')
        cy.visit("https://automationexercise.com/login")
        cy.get('[data-qa="login-email"]').type("mora@gmail.com")
        cy.get('[data-qa="login-password"]').type("mora2002")
        cy.get('[data-qa="login-button"]').click()
        cy.get('.shop-menu > .nav > :nth-child(1) > a').click()
        cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('u').click()
        cy.get('.col-sm-6 > .btn').click()
        cy.get('.form-control').type("comment")
        cy.get(':nth-child(7) > .btn').click()
        cy.get('[data-qa="name-on-card"]').type("Amr Khaled")
        cy.get('[data-qa="card-number"]').type("6354125")
        cy.get('[data-qa="cvc"]').type("311")
        cy.get('[data-qa="expiry-month"]').type("11")
        cy.get('[data-qa="expiry-year"]').type("2026")
        cy.get('[data-qa="pay-button"]').click()
        cy.get('.col-sm-9 > .btn-default').click()
        cy.get('[data-qa="continue-button"]').click()
    });
});

describe('Products', () => {
    it('Product Test 16', () => {
        cy.visit("https://automationexercise.com/")
        cy.get('.nav > :nth-child(4)')
        cy.visit("https://automationexercise.com/login")
        cy.get('[data-qa="login-email"]').type("mora@gmail.com")
        cy.get('[data-qa="login-password"]').type("mora2002")
        cy.get('[data-qa="login-button"]').click()
        cy.get('.shop-menu > .nav > :nth-child(1) > a').click()
        cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('u').click()
        cy.get('.col-sm-6 > .btn').click()
        cy.get('.form-control').type("comment")
        cy.get(':nth-child(7) > .btn').click()
        cy.get('[data-qa="name-on-card"]').type("A111")
        cy.get('[data-qa="card-number"]').type("6354125")
        cy.get('[data-qa="cvc"]').type("311")
        cy.get('[data-qa="expiry-month"]').type("1")
        cy.get('[data-qa="expiry-year"]').type("2020")
        cy.get('[data-qa="pay-button"]').click()
        cy.get('.col-sm-9 > .btn-default').click()
        cy.get('[data-qa="continue-button"]').click()
    });
});

describe('Products', () => {
    it('Product Test 17', () => {
        cy.visit("https://automationexercise.com/")
        cy.get('.nav > :nth-child(4)')
        cy.visit("https://automationexercise.com/login")
        cy.get('[data-qa="login-email"]').type("mora@gmail.com")
        cy.get('[data-qa="login-password"]').type("mora2002")
        cy.get('[data-qa="login-button"]').click()
        cy.get('.shop-menu > .nav > :nth-child(1) > a').click()
        cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('u').click()
        cy.get('.col-sm-6 > .btn').click()
        cy.get('.form-control').type("comment")
        cy.get(':nth-child(7) > .btn').click()
        cy.get('[data-qa="name-on-card"]').type("A111")
        cy.get('[data-qa="card-number"]').type("6354125")
        cy.get('[data-qa="cvc"]').type("311")
        cy.get('[data-qa="expiry-month"]').type("1")
        cy.get('[data-qa="expiry-year"]').type("2020")
        cy.get('[data-qa="pay-button"]').click()
        cy.get('.col-sm-9 > .btn-default').click()
        cy.get('[data-qa="continue-button"]').click()
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    });
});