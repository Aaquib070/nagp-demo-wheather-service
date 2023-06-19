FROM nodejs
ENV app_dir /application
WORKDIR ${app_dir}
COPY ./application .
RUN npm install
CMD [ "npm", "run", "start" ]
