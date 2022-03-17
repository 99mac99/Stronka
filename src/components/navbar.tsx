import {
	Container,
	Navbar,
	NavDropdown,
	Nav,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
	return (
		<>
			<Navbar collapseOnSelect expand='lg' bg='black' variant='dark'>
				<Container>
					<Navbar.Brand href='#home'>UNIMIND</Navbar.Brand>
					<Navbar.Toggle aria-controls='responsive-navbar-nav' />
					<Navbar.Collapse id='responsive-navbar-nav'>
						<Nav className='me-auto'>
							<Nav.Link href='#Home'>Home</Nav.Link>
							<Nav.Link href='#Misja'>Misja</Nav.Link>
							<Nav.Link href='#Roadmap'>Roadmap</Nav.Link>
							<Nav.Link href='#Zespół'>Zespół</Nav.Link>
						</Nav>
						<Nav>
							<Nav.Link href='#deets'>More deets</Nav.Link>
							<Nav.Link eventKey={2} href='#memes'>
								Dank memes
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}

export default NavBar;
