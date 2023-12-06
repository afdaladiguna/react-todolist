import { ListItem } from '@mui/material';
import { TextField } from '@mui/material';
import Create from '@mui/icons-material/Create';
import { useState } from 'react';
import { InputAdornment } from '@mui/material';
import { IconButton } from '@mui/material';

export default function TodoForm({ addTodo }) {
  const [text, setText] = useState('');
  const handleChange = (evt) => {
    setText(evt.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText('');
  };

  return (
    <ListItem>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Add Todo"
          variant="outlined"
          onChange={handleChange}
          value={text}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton aria-label="create todo" edge="end">
                  <Create />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </form>
    </ListItem>
  );
}
