import App from './App.html';

const app = new App({
	target: document.body,
	data: {},
});
document.body.onkeypress = function(e){
	e.preventDefault();
	app.handleClick(e.key);
}

export default app;