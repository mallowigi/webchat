server {
  server_name local.wixpush.com;

  listen          80;

  index           index.html;
  root            /home/codeoasis/WebstormProjects/pushServer/dist;


  location / {
	root /home/codeoasis/WebstormProjects/pushServer/dist;

	try_files $uri $uri/ /index.html =404;
  }

}
