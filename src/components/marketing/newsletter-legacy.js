import * as React from "react"
import { useColorModeValue } from "@chakra-ui/react"
import { LightMode } from '@chakra-ui/color-mode';
import {
    Input,
    Heading,
    Button,
    Box
  } from "@chakra-ui/react"
  import addToMailchimp from "gatsby-plugin-mailchimp"

  const MyBox = ({ children }) => {
    return (
      <Box
      borderRadius="2xl"
      overflow="hidden"
      boxShadow="2xl"
      bg={'white'}
      p={'6'}
      bg={useColorModeValue('white', 'gray.700')}
      >
        {children}
      </Box>
    )
  }

const MyButton = ({ children }) => {
  return (
  <LightMode>
    <Button 
      minW={{ base: "100%", md: "200px"}}
      rounded={'full'}
      shadow="md"
      size={'lg'}
      fontWeight={'bold'}
      px={6}
      colorScheme={'brand'}
      backgroundColor={'#D93C3C'}
      type='submit'
    >
      {children}
    </Button>
  </LightMode>
  )
}

const MyInput = ({ changeState }) => {
  return (
    <Input
    bg={useColorModeValue('white', 'gray.800')}
    color={useColorModeValue('gray.800', 'gray.100')}
    placeholder="youremail@email.com"
    label="Email"
    type="email"
    name="email"
    autoComplete="email"
    onChange={changeState}
    isRequired
    maxW={'50%'}
    my={'2'}
    borderRadius={'2xl'}
    >
    </Input>
  )
}



  export default class MailChimpForm extends React.Component {
    constructor() {
      super()
      this.state = { email: "", result: null, msg: '' }
    }
    _handleSubmit = async e => {
      e.preventDefault()
      const result = await addToMailchimp(this.state.email)
      this.setState({result: result})
      this.setState({msg: result.msg})
    }
  handleChange = event => {
      this.setState({ email: event.target.value })
    }
  render() {
      return (
          <MyBox>
          <form 
          onSubmit={this._handleSubmit}
          >
          <Heading>Newsletter</Heading>
          <div className="message" dangerouslySetInnerHTML={{__html: this.state.msg}} />
            <MyInput
              changeState={this.handleChange}
            />
            <br />
            <MyButton>
              Subscribe
            </MyButton>
          </form>
          </MyBox>
      )
    }
  }