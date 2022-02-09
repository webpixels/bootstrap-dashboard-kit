var path = require('path');

var getSlug = function (filename) {
    var slug = path.dirname(filename).split('/').pop().toString().replaceAll('_', '-');

    return slug;
}

// Random person name generator

var names = [
    'Robert Fox', 'Darlene Robertson', 'Theresa Webb', 'Kristin Watson', 'Cody Fisher', 'Jane Cooper', 'Jerome Bell', 'Jenny Wilson', 'Darrell Steward', 'Savannah Nguyen'
];

var emails = [
    'robert.fox@example.com', 'darlene@example.com', 'theresa.webb@example.com', 'cody.fisher@example.com', 'jane.cooper@example.com', 'jerome@example.com', 'jenny.wilson@example.com', 'darrell.steward@example.com', 'savannah@example.com'
];

var occupations = [
    'Web Designer', 'Developer', 'Marketing Specialist', 'Sales Manager', 'UI Designer', 'PHP Programmer'
];

var avatars = [
    '/img/people/img-1.jpg', '1610271340738-726e199f0258', '1610878722345-79c5eaf6a48c', '1612422656768-d5e4ec31fac0', '1608976328267-e673d3ec06ce', '1610564558732-a36a4e28151c', '1604695753685-20e756f4aa61', '1611880147493-7542bdb0f024', '1608549036505-ead5b1de5417', '1591258739299-5b65d5cbb235'
];

var phones = [
    '202-555-0152', '224-567-2662', '401-505-6800', '307-560-8817', '202-985-6674', '407-213-6856', '303-572-7397', '206-694-8841', '202-609-5253', '214-798-6124'
];

var companies = [
    'Dribbble', 'Netguru', 'Figma', 'Mailchimp', 'Webpixels', 'Microsoft', 'Vimeo', 'Spotify', 'Airbnb', 'Instagram'
];

var logos = [
    'logo-1.png', 'logo-2.png', 'logo-3.png', 'logo-4.png', 'logo-5.png', 'logo-6.png', 'logo-7.png', 'logo-8.png', 'logo-9.png', 'logo-10.png'
];

var industries = [
    'Design', 'Retail', 'Technology', 'E-commerce', 'Web Development', 'Software', 'Advertising', 'Music', 'Movies', 'Blogging'
];

var cities = [
    'Los Angeles', 'New York', 'San Francisco', 'Bucharest', 'Cluj', 'Athens', 'Rome', 'Lisbon', 'Paris', 'Berlin'
];

var tasks = [
    'Integrate Tag Manager', 'Launch Purpose Style', 'Onboarding Process', 'Presentation for Design Partner', 'Landing Page Redesign', 'Convert Figma to HTML'
];

var projects = [
    'Webpixels', 'Purpose', 'Clever', 'Social Media', 'SEO', 'Design', 'Features', 'Laboratory', 'Purpose', 'Clever'
];


module.exports = {
    name: names,
    email: emails,
    occupation: occupations,
    avatar: avatars,
    phone: phones,
    company: companies,
    logo: logos,
    industry: industries,
    city: cities,
    task: tasks,
    project: projects,
    getSlug
}
