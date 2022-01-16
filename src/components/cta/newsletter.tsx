import * as React from "react"
import { FormEvent, ChangeEvent, useState } from 'react';
import {
  Stack,
  FormControl,
  Input,
  Button,
  useColorModeValue,
  Heading,
  Box,
  Container,
  Flex,
  LightMode,
} from '@chakra-ui/react';
import addToMailchimp from "gatsby-plugin-mailchimp"
import { BiCheck } from "@react-icons/all-files/bi/BiCheck"

export default function MailChimpForm() {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<'initial' | 'submitting' | 'success'>('initial');
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('')

  const _handleSubmit = (e:FormEvent) => {
    e.preventDefault();
    setError(false);
    setState('submitting');
    addToMailchimp(email).then((data) => {
      setTimeout(() => {
        if (data.result == "error")  {
          setError(true);
          setState('initial');
          setMessage(data.msg)
          return;
        }
        setState(data.result);
        setMessage(data.msg)
      }, 1000);
    })
  }

  return (
    <Flex
      align={'center'}
      justify={'center'}
      id="newsletter"
    >
      <Container
        minWidth={{ base: '100%', md: '70%' }}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'2xl'}
        rounded={'brandRadius.card'}
        p={{ base: 4, sm: 8, md: 8}}
        direction={'column'}>
        <Heading
          as={'h2'}
          fontSize={{ base: 'xl', sm: '2xl' }}
          textAlign={'center'}
          mb={6}>
            Sign up to our newsletter
        </Heading>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          as={'form'}
          spacing={{ base: '4', md: '10' }}
          onSubmit={_handleSubmit}>
          <FormControl>
            <Input
              size={'lg'}
              rounded={'brandRadius.button'}
              variant={'solid'}
              borderWidth={1}
              _placeholder={{
                color: 'gray.400',
              }}
              borderColor={useColorModeValue('gray.300', 'gray.700')}
              backgroundColor={state == 'success' ? 'gray.50' : useColorModeValue('white', 'gray.800')}
              color={useColorModeValue('gray.800', 'white')}
              id={'email'}
              type={'email'}
              required
              placeholder={'Your Email'}
              aria-label={'Your Email'}
              value={email}
              disabled={state !== 'initial'}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
          </FormControl>
          <FormControl w={{ base: '100%', md: '50%' }}>
            <LightMode>
            <Button
              rounded={'brandRadius.button'}
              colorScheme={state === 'success' ? 'green' : 'brand'}
              backgroundColor={state === 'success' ? 'green' : '#D93C3C'}
              isLoading={state === 'submitting'}
              w="100%"
              size={'lg'}
              fontWeight={'bold'}
              type={state === 'success' ? 'button' : 'submit'}>
              {state === 'success' ? <BiCheck /> : 'Prijava'}
            </Button>
            </LightMode>
          </FormControl>
        </Stack>
        <Box
          mt={2}
          textAlign={'center'}
          color={error && !message.includes("already") ? 'red.500' : useColorModeValue('gray.700', 'gray.400')}>
          {error
            ? <div className="mailchimpMessage" dangerouslySetInnerHTML={{__html: message}} />
            : state == 'success' && message.includes("confirm") 
              ? "Please check your email to confirm."
            : state == 'success' 
              ? "Success! Thanks for subscribing."
            : "You won't recieve any spam✌️"
          }
        </Box>
      </Container>
    </Flex>
  );
}