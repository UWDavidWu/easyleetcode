import "./Task.css";
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import AddIcon from '@mui/icons-material/Add';

const columns = [
  { field: "id", headerName: "LeetCode#", width: 130 },
  { field: "title", headerName: "Title", width: 70 },
  { field: "category", headerName: "Category", width: 130 },
  { field: "status", headerName: "Status", width: 130 },
];

const rows = [
  { id: 1, title: "Snow", category: "Jon", status: "Completed" },
  { id: 2, title: "Lannister", category: "Cersei", status: "Scheduled" },
  { id: 3, title: "Lannister", category: "Jaime", status: "Scheduled" },
  { id: 4, title: "Lannister", category: "Cersei", status: "Scheduled" },
  { id: 5, title: "Lannister", category: "Jaime", status: "Scheduled" },
];

const todayrows = [
  { id: 1, title: "Snow", category: "Jon", status: "Completed" },
  { id: 2, title: "Lannister", category: "Cersei", status: "Scheduled" },
  { id: 3, title: "Lannister", category: "Jaime", status: "Scheduled" },
];

const Task = () => {
  const [taskToday, setTaskToday] = useState([]);
  const [taskTomo, setTaskTomo] = useState([]);

  useEffect(() => {
    setTaskToday((prev) =>
      prev.concat({
        title: "Task 1",
        description: "This is a task description",
        status: "done",
        date: "2020-01-01",
        time: "12:00",
      })
    );
  }, []);

  return (
    <div className="page taskContainer">
      <div className="taskMainContainer">
        <div className="addTask">
          <div className="sectionTitle">Add Tasks</div>
          <div className="card addtaskcard">
            <div className="taskForm">
              <TextField
                required
                id="outlined-required"
                label="Question ID"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />

              <TextField
                id="outlined-read-only-input"
                label="Question Name"
                defaultValue="Enter ID to show"
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                id="outlined-read-only-input"
                label="Category"
                defaultValue="Enter ID to show"
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                id="outlined-read-only-input"
                label="Difficulty"
                defaultValue="Enter ID to show"
                InputProps={{
                  readOnly: true,
                }}
              />
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Add to Today"
                />
              </FormGroup>
              <Button variant="contained" startIcon={<AddIcon />}>
                Add task
              </Button>
            </div>
          </div>
        </div>
        <div className="taskDetailContainer">
          <div className="taskDetail">
            <div className="sectionTitle">Today</div>
            <div className="card taskcard">
              <DataGrid
                rows={todayrows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
              />
              <Button variant="contained" startIcon={<DeleteIcon />}>
                Delete
              </Button>
              <Button variant="contained" endIcon={<SendIcon />}>
                Send
              </Button>
            </div>
          </div>
          <div className="taskDetail">
            <div className="sectionTitle">Tomorrow</div>
            <div className="card taskcard">
              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
              />
              <Button variant="contained" startIcon={<DeleteIcon />}>
                Delete
              </Button>
              <Button variant="contained" endIcon={<SendIcon />}>
                Send
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
