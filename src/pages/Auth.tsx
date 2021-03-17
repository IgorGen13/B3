import React from 'react'
import { Button, Card, Container, Form, NavLink, Row } from 'react-bootstrap'

export const Auth: React.FC = () => {
    return (
        <Container>
        <Card style={{width: 600}} className="p-5">
            <h3 className="m-auto">Авторизация</h3>
            <Form className="d-flex flex-row">
                <Form.Control 
                className="mt-2"
                placeholder="email"
                /> 
                <Form.Control 
                className="mt-2"
                placeholder="password"
                /> 

                <Row className="d-flex justify-content-between mt-3">
                <div>
                    Нет аккаунта? <NavLink>Зарегистрируйся!</NavLink>
                </div>
                <Button variant={"outline-success"}>Войти</Button>
                </Row>
                

            </Form>
        </Card>
        </Container>
    )
}