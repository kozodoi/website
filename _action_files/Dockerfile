FROM hamelsmu/fastpages-nbdev

RUN pip install --upgrade pip
RUN pip install nbdev==0.2.10

WORKDIR /fastpages
COPY . .
RUN chmod u+x action_entrypoint.sh
RUN chmod u+x word2post.sh
RUN dos2unix /fastpages/*.sh

CMD [ "/fastpages/action_entrypoint.sh" ]
