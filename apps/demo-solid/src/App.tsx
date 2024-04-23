import { type ParentComponent } from "solid-js";

const List: ParentComponent = (props) => {
  return <ul>{props.children}</ul>;
};

const ListItem: ParentComponent = (props) => {
  return <li>{props.children}</li>;
};

function App() {
  return (
    <List>
      <ListItem>Item 1</ListItem>
      <ListItem>Item 2</ListItem>
      <ListItem>Item 3</ListItem>
      <ListItem>Item 4</ListItem>
      <ListItem>Item 5</ListItem>
    </List>
  );
}

export default App;
