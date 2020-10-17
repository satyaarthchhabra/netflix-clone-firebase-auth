import React from 'react'
import {Title,Name,List,Item,Picture,Container} from './styles/profiles'
const Profiles = ({ children, ...restProps}) => {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}
Profiles.Title=({ children, ...restProps})=>{ 
    return <Title {...restProps}>{children}</Title>
}
Profiles.List=({ children, ...restProps})=>{ 
    return <List {...restProps}>{children}</List>
}

Profiles.User=({ children, ...restProps})=>{ 
    return <Item {...restProps}>{children}</Item>
}
Profiles.Name=({ children, ...restProps})=>{ 
    return <Name {...restProps}>{children}</Name>
}
Profiles.Picture=({ src, ...restProps})=>{ 
    return <Picture {...restProps} src={src? `/images/users/${src}.png`:`/images/misc/loading.gif`} />
}

export default Profiles
