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

const CreateRecruitment = () => {
  const [type, setType] = useState("");
  const [comment, setComment] = useState("");
  const [cost, setCost] = useState("");
  const [duration, setDuration] = useState("");
  const navigate = useNavigate();

  const handleCreate = async () => {
    const data = {
      type,
      comment,
      cost,
      start_date: startDate,
      end_date: endDate,
    };

    try {
      await createRecruitment(data);
      console.log('募集作成成功:', data);
      navigate('/recruitment-list');
    } catch (error) {
      console.error('募集作成失敗:', error);
    }
  };

  return (
    <div>
      <Container>
        <Header />
        <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
          <Typography
            variant="h7"
            sx={{ fontFamily: "Roboto", fontWeight: 700, color: "brack" }}
          >
            募集作成
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
                <p>貸出期間を選択してください</p>
                <InputLabel>time span</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  label="種別"
                  // onChange={handleChange}
                  sx={{ width: 200 }}
                >
                  <MenuItem value={"3"}>3時間</MenuItem>
                  <MenuItem value={"6"}>6時間</MenuItem>
                  <MenuItem value={"1"}>1日</MenuItem>
                </Select>
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
