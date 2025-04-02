const url_token = new URL(window.location.href);
const token = url_token.searchParams.get('token');
//axios.defaults.baseURL ='https://devadminnew.fustekaice.com/api/v3/new/games/quiz';
axios.defaults.baseURL ='https://apifustekag.fustekaice.com/api/v3/new/games/quiz';
axios.defaults.headers.common['Authorization'] = "Bearer " + token;
axios.defaults.headers.post['Content-Type'] = 'application/json';