import React from 'react'
import faqsData from '../fixtures/faqs.json'
import {Accordion} from '../components'
import {OptForm} from '../components'

const FaqsContainer = () => {
    return (
        <Accordion>
            <Accordion.Title>Frequently Asked Questions</Accordion.Title>
            {
                faqsData.map(data =>(
                    <Accordion.Item key={data.id}>
                        <Accordion.Header>{data.header}</Accordion.Header>
                        <Accordion.Body>{data.body}</Accordion.Body>
                    </Accordion.Item>
                ))
            }
            <Accordion.Item />
<OptForm>
    <OptForm.Input placeholder="email id " />
    <OptForm.Button  >try it now </OptForm.Button>
    <OptForm.Text  >Ready to watch ? Enter your email to create or restart a memberShip</OptForm.Text>
</OptForm>
        </Accordion>
    )
}

export default FaqsContainer
