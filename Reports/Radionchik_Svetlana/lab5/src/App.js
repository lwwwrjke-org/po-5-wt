import React, { useState, useEffect } from 'react';
import { Form, Card, Image, Icon } from 'semantic-ui-react';
import './App.css';


function WithListLoading(Component) {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <p style={{ textAlign: 'center', fontSize: '30px' }}>
        Just wait..
      </p>
    );
  };
}

function App() {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [followers, setFollowers] = useState('');
  const [following, setFollowing] = useState('');
  const [repos, setRepos] = useState('');
  const [avatar, setAvatar] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [twitter, setTwitter] = useState('');
  const [ownUrl, setOwnUrl] = useState('');
  const [bio, setBio] = useState('');
  const [userInput, setUserInput] = useState('');
  const [error, setError] = useState(null);
  const [view, setView] = useState(false);
  const [viewDesciption, setViewDesciption] = useState("row");
  const [isFetched, setFetched] = useState(false);
  const [dataRepo, setDataRepo] = useState({
    loading: false,
    repos: null,
  });

  const List = (props) => {
    const { repos } = props;
    if (!repos || repos.length === 0 || !Array.isArray(repos)) return <p></p>;
    return (
      <ul>
        <h1>Public repositories:</h1>
        <div className={viewDesciption}>
          {repos.map((repo) => {
            return (
              <div className="repo" key={repo.id}>
                <Icon name = 'check'/>{repo.name}
              </div>
            );
          })}
        </div>
      </ul>
    );
  };

  const ListLoading = WithListLoading(List);

  useEffect(() => {
    if(!isFetched) {
      fetch('https://api.github.com/users/lwwwr')
      .then(res => res.json())
      .then(data => {
        setData(data);
      });
  
      setDataRepo({loading: true});
      fetch(`https://api.github.com/users/lwwwr/repos`)
      .then(response => response.json())
      .then((repos) => {
        setDataRepo({loading: false, repos: repos});
      }, [setDataRepo]);

      setFetched(true);
    }   
  });
  

  const setData = ({ 
    name, 
    login, 
    followers, 
    following, 
    public_repos, 
    avatar_url, 
    company, 
    location,
    twitter_username,
    blog,
    bio,
  }) => {
    setName(name);
    setUserName(login);
    setFollowers(followers);
    setFollowing(following);
    setRepos(public_repos);
    setAvatar(avatar_url);
    setCompany(company);
    setLocation(location);
    setTwitter(twitter_username);
    setOwnUrl(blog);
    setBio(bio);
  };

  const handleSearch = (e) => {
    setUserInput(e.target.value)
  }

  const handleSubmit = () => {
    fetch(`https://api.github.com/users/${userInput}`)
    .then(res => res.json())
    .then(data => {
      if (data.message) {
        setError(data.message)
      }
      else {
        setData(data);
        setError(null);
      }
    });

    setDataRepo({loading: true});
    fetch(`https://api.github.com/users/${userInput}/repos`)
    .then(response => response.json())
    .then((repos) => {
      setDataRepo({loading: false, repos: repos});
    }, [setDataRepo]);
  }

  const changeView = () => {
    view ? setView(false) : setView(true);
    if(!view) {
      setViewDesciption("bar")
    } else {
      setViewDesciption("row")
    }
  }

  return (
    <div>
      <div className = "search">
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Input placeholder = 'Username' name = 'name' onChange={handleSearch}/>
            <Form.Button content = 'Search' />
          </Form.Group>
        </Form>
      </div>
      
      { error ? (
        <h1>{error}</h1>
        ) : (
      <div class="mainWindow">
        <div className = "mainWindowPosition">
          <Card>
            <Image src = {avatar} wrapped ui = {false}/>
            <Card.Content>
              <Card.Header>{name}</Card.Header>
              {userName}
            </Card.Content>
            { String(bio)!='null' ?
              (
              <Card.Content>
                {bio}
              </Card.Content>
              ) : null }
              <Card.Content extra>
                <a>
                <Icon name = 'user'/>
                {followers} Followers
                </a>
                <br/><br/>
                <a>
                  {repos} Repos
                </a>
                <br/><br/>
                <a>
                {following} Following
                </a>
              </Card.Content>
              <Card.Content extra>
                { String(location)!='null' ?
                (
                <p>
                  <Icon name = 'point'/>
                  {location}
                  <br/>
                </p>
                ) : null }
            
                { String(company)!='null' ?
                (
                <p>
                  <Icon name = 'building'/>
                  {company}
                  <br/>
                </p>
                ) : null }

                { String(ownUrl)!='' ?
                (
                <p>
                  <Icon name = 'paperclip'/>
                  {ownUrl}
                  <br/>
                </p>
                ) : null }

                { String(twitter)!='null' ?
                (
                <p>
                  <Icon name = 'twitter'/>
                  {twitter}
                  <br/>
                </p>
                ) : null }
              </Card.Content>
          </Card>
        </div>

        <div className = "mainWindowPosition">
          <div className="dataRepo">
            <div>
              <ListLoading isLoading={dataRepo.loading} repos={dataRepo.repos} onChange={changeView}/>
            </div>
          </div>
        </div>
        
        <div className = "changeView">
          <Form onSubmit={changeView}>
            <Form.Group>
              <Form.Button content = 'Change view' />
            </Form.Group>
          </Form>
        </div>
      </div>
      )}
    </div>
  );
}
export default App;