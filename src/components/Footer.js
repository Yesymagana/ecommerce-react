import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFaceSmileWink, faIceCream, faMapLocationDot, faPaintbrush, faPhone, faTShirt } from '@fortawesome/free-solid-svg-icons';
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    ${mobile({flexDirection: "column"})}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display: "none"})}
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    cursor: pointer;
    &:hover{
        text-decoration: underline;
    }
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({backgroundColor: "#fff8f8"})}
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width: 75%;

`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>.MAGAÑA.</Logo>
            <Desc>Lorem Ipsum etc...</Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <FontAwesomeIcon cursor="pointer" icon={faFaceSmileWink} />
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <FontAwesomeIcon cursor="pointer" icon={faIceCream} />
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <FontAwesomeIcon cursor="pointer" icon={faTShirt} />
                </SocialIcon>
                <SocialIcon color="E60023">
                    <FontAwesomeIcon cursor="pointer" icon={faPaintbrush} />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Men's Fashion</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Women's Fashion</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>About Us</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <FontAwesomeIcon style={{marginRight: "10px"}} icon={faMapLocationDot} />
                700 Van Ness Ave, Fresno, CA 93721
            </ContactItem>
            <ContactItem>
                <FontAwesomeIcon style={{marginRight: "10px"}} icon={faPhone} />
                555-555-5555
            </ContactItem>
            <ContactItem>
                <FontAwesomeIcon style={{marginRight: "10px"}} icon={faEnvelope} />
                contact@magana.com
            </ContactItem>
            <Payment src="https://toplineautoshop.com/img/cms/paypal-credit-card-logos-png-8_1.png"/>
        </Right>
    </Container>
  );
}

export default Footer;