import { Button } from '@chakra-ui/button';
import { Box } from '@chakra-ui/layout';
import { Form, Formik } from 'formik';
import React from 'react'
import { useMutation } from 'urql';
import { InputField } from '../components/InputField';
import { Wrapper } from '../components/Wrapper';

interface registerProps {

}

const REGISTER_MUT = `
mutation Register($username: String!, $password: String!){
    register(options: {username: $username, password: $password}) {
      errors{
        field
        message
      }
      user {
        id
        username
      }
    }
  }
`

const Register: React.FC<registerProps> = ({ }) => {
    const [{ }, register] = useMutation(REGISTER_MUT)

    return (
        <Wrapper variant="small">
            <Formik
                initialValues={{ username: "", password: "" }}
                onSubmit={values => {
                    return register(values)
                }}>
                {({ isSubmitting }) => (
                    <Form>
                        <InputField
                            name="username"
                            placeholder="Enter username"
                            label="Username"
                        />
                        <Box mt={4}>
                            <InputField
                                type="password"
                                name="password"
                                placeholder="Enter password"
                                label="Password"
                            />
                        </Box>
                        <Button
                            mt={4}
                            colorScheme="teal"
                            type="submit"
                            isLoading={isSubmitting}
                            color="white"
                        >
                            Register
                        </Button>
                    </Form>
                )}
            </Formik>
        </Wrapper>
    );
}

export default Register