import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Nav from "../../../components/Nav/Nav";
import Account from "../../../components/Account/Account";

function Profile() {
  const { currentUser } = useSelector((prev) => prev.users);
  return (
    <>
      <Container>
        <Row>
          <Col md={2}>
            <Nav user={currentUser} />
          </Col>
          <Col md={10}>
            <Account currentUser={currentUser} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Profile;
