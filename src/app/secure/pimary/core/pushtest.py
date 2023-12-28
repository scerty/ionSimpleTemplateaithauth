import pusher

pusher_client = pusher.Pusher(
  app_id='1728089',
  key='b1a8f4d274c455dccebb',
  secret='ebe705770a2a72e8523c',
  cluster='eu',
  ssl=True
)

pusher_client.trigger('my-channel', 'my-event', {'message': 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae quo delectus est facilis quae repudiandae, minima unde laborum et nihil ex eligendi repellendus? In, delectus reiciendis possimus quibusdam perspiciatis explicabo.',

                                                 'col':'Abdullah Hammoud'
                                                 })