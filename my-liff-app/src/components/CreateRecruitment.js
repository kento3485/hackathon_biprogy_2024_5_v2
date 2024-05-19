// src/components/CreateRecruitment.js
import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Paper,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  AppBar,
  Toolbar,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { createRecruitment } from "../data/api";

const CreateRecruitment = () => {
  const [type, setType] = useState("");
  const [comment, setComment] = useState("");
  const [cost, setCost] = useState("");
  const [duration, setDuration] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const navigate = useNavigate();

  const handleCreate = () => {
    // ダミーデータに新しい募集を追加する処理
    console.log("募集作成", { type, comment, cost, duration });
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            募集作成
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
          <Typography
            variant="h7"
            sx={{ fontFamily: "Roboto", fontWeight: 700, color: "brack" }}
          >
            以下の項目を入力してください
          </Typography>
          <Box component="form" noValidate autoComplete="off">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <p>種別を選択してください</p>
                <InputLabel>type</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  label="種別"
                  // onChange={handleChange}
                  sx={{ width: 200 }}
                >
                  <MenuItem value={"自転車"}>自転車</MenuItem>
                  <MenuItem value={"車"}>車</MenuItem>
                  <MenuItem value={"駐車場"}>駐車場</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12}>
                <p>貸し出し場所を記入してください</p>
                <TextField
                  label="場所"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  sx={{ width: 200 }}
                />
              </Grid>
              <Grid item xs={12}>
                <p>コメントを記載してください</p>
                <TextField
                  label="コメント"
                  value={cost}
                  onChange={(e) => setCost(e.target.value)}
                  sx={{ width: 200 }}
                />
              </Grid>
              <Grid item xs={12}>
                <p>貸出価格を選択してください</p>
                <InputLabel>cost</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  label="種別"
                  // onChange={handleChange}
                  sx={{ width: 200 }}
                >
                  <MenuItem value={"自転車"}>500円</MenuItem>
                  <MenuItem value={"車"}>1000円</MenuItem>
                  <MenuItem value={"駐車場"}>1500円</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12}>
                <p>貸出開始時刻を選択してください</p>
                <TextField
                label=""
                type="datetime-local"
                fullWidth
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                  width: 200
                }}
              />
              </Grid>
              <Grid item xs={12}>
                <p>貸出終了時刻を選択してください</p>
                <TextField
                label=""
                type="datetime-local"
                fullWidth
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                  width: 200
                }}
              />
              </Grid>
            </Grid>
            <Box display="flex" justifyContent="center" mt={2}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleCreate}
                sx={{ marginRight: 2, width: 200 }}
              >
                募集作成
              </Button>
              <Button
                variant="contained"
                color="primary"
                sx={{ width: 200 }}
                onClick={() => navigate("/recruitment-list")}
              >
                戻る
              </Button>
            </Box>
          </Box>
        </Paper>
      </Container>
    </div>
  );
};

export default CreateRecruitment;
