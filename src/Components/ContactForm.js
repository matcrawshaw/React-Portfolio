
import { TextInput, Textarea, SimpleGrid, Group, Title, Button, useMantineTheme } from '@mantine/core';
import { useForm } from '@mantine/form';

import React from 'react';
import emailjs from '@emailjs/browser';


function GetInTouchSimple() {


  const sendEmail = (e) => {
    // e.preventDefault();

    emailjs.send("service_mr586wb", "template_rfyxy4n", {
      user_name: e.name,
      message: e.message,
      user_email: e.email,
      message_subject: e.message,
    }, 'bv-z7vq6XbBpRDLt4');

  };


  const theme = useMantineTheme();
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0,
    },
  });


  return (


    <div style={{ opacity: "90%" }}>
      <form onSubmit={form.onSubmit((e) => {
        sendEmail(e);
        alert('Thank you for your message! I will be in touch as soon as possible')
        window.location.reload(false);

      })}>
        <Title
          order={2}
          size="h1"
          sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, color: theme.white })}
          weight={900}
          align="center"
        >
          Get in touch
        </Title>

        <SimpleGrid cols={2} mt="xl" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
          <TextInput
            label="Name"
            placeholder="Your name"
            name="user_name"
            variant="filled"
            {...form.getInputProps('name')}
          />
          <TextInput
            label="Email"
            placeholder="Your email"
            name="user_email"
            variant="filled"
            {...form.getInputProps('email')}
          />
        </SimpleGrid>

        <TextInput
          label="Subject"
          placeholder="subject"
          mt="md"
          name="subject"
          variant="filled"
          {...form.getInputProps('subject')}
        />
        <Textarea
          mt="md"
          label="message"
          placeholder="Your message"
          maxRows={10}
          minRows={5}
          autosize
          name="message"
          variant="filled"
          {...form.getInputProps('message')}
        />

        <Group position="center" mt="xl">
          <Button variant="gradient" gradient={{ from: 'teal', to: 'grape' }} type="submit" size="md">
            Send message
          </Button>
        </Group>
      </form>
      <h1 style={{ fontFamily: `Greycliff CF, ${theme.fontFamily}`, color: theme.white }}>Please reach me via phone on 07530277946 <br /> or via email at tayc9518@gmail.com</h1>

    </div>
  );


}


export default GetInTouchSimple