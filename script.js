// Cookies string for your theme
const cookie = 'o=s; p=-2; ad=en_US; 1=-1; aq=-1; l=wt-wt; av=1; ak=-1; ax=-1; ap=-1; au=-1; s=s; ae=1e1e2e; 7=282a36; 8=cdcdcd; 9=e5e5e5; j=282a36; aa=bd93f9; x=888882; 21=272936';

// Converts cookie string into formatted JSON
const cookieToJSON = (cookieRaw) => {
  const cookieJson = {};
  const items = cookieRaw.split(/[ ,]+/);

  items.forEach((item) => {
    const parts = item.split('=');
    cookieJson[parts[0]] = parts[1];
  });

  return cookieJson;
};

// Iterates over JSON, and adds to browser cookie store
const setCookies = (cookieJson) => {
  Object.keys(cookieJson).forEach((key) => {
    document.cookie = `${key}=${cookieJson[key]}`;
  });
};

alert("Carter Pry's personal theme will be applied.");

// Call set cookies, passing in formated cookie data
setCookies(cookieToJSON(cookie));

// All done, reload page for changes to take effect :)
location.reload();
