import styled from 'styled-components';

const Card = styled.div`
  background-color: #111;
  border: 2px solid #00FF00;
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  width: 300px;
  box-shadow: 0 0 10px #00FF00;
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 0 auto 1rem;
  object-fit: cover;
  border: 2px solid #00FF00;
`;

const Line = styled.hr`
  margin: 1rem 0;
  border: none;
  border-top: 1px solid #00FF00;
`;

const Button = styled.a`
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: transparent;
  color: #00FF00;
  border: 1px solid #00FF00;
  text-decoration: none;
  border-radius: 0.25rem;
  transition: background 0.3s;
  &:hover {
    background-color: #00FF00;
    color: #000;
  }
`;

function ProfileCardStyled({ user }: { user: any }) {
  return (
    <Card>
      <ProfileImage src={user.avatar_url} alt="profile picture" />
      <p>{user.name}</p>
      <Line />
      <p>{user.bio}</p>
      <Line />
      <p>Repositórios públicos: {user.public_repos}</p>
      <Button href={user.html_url} target="_blank" rel="noopener noreferrer">
        Ver Perfil
      </Button>
    </Card>
  );
}

export default ProfileCardStyled;
