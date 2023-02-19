import React from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap'

export default function CardNew({ children, title }) {
    return (
        <Card
            className="my-2"
            color="light"
            style={{
                width: '80%',
                height: 'auto'
            }}
        >
            <CardHeader>
                {title}
            </CardHeader>
            <CardBody>
                {children}
            </CardBody>
        </Card>
    )
}
