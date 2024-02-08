import { Box, Button, Grid, TextField } from "@mui/material";
import { Container } from "@mui/system";
import axios from "axios";
import { useState } from "react";
import LandingPageSmall from "../components/LandingPageSmall";
import conact from "../assets/images/conact.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    reason: "",
    comments: "",
  });

  const [errorMessages, setErrorMessages] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const baseUrl = "";

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setErrorMessages((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const newErrorMessages = {};

    if (!formData.name) {
      newErrorMessages.Name = "Please enter your first name.";
    }

    if (!formData.phone) {
      newErrorMessages.Phone = "Please enter your last name.";
    }

    if (!formData.email) {
      newErrorMessages.email = "Please enter your email.";
    }

    if (Object.keys(newErrorMessages).length > 0) {
      setErrorMessages(newErrorMessages);
    } else {
      console.log(formData);

      const obj = {
        UserId: 1,
        ReturnRecordId: true,
        ReturnRecordError: true,
        SaveList: [
          {
            Id: 0,
            Name: formData.name,
            Email: formData.email,
            Phone: formData.phone,
            Company: formData.company,
            Reason: formData.reason,
            Comments: formData.comments,
          },
        ],
      };

      await axios
        .post(`${baseUrl}/api/Users/SavetsbmContactUs`, obj)
        .then(async (res) => {
          const id = res?.data?.data?.[0]?.objData?.id ?? 0;
          if (!id) return null;
          const emailObj = { tsbmContactUsId: id };
          await axios
            .post(`${baseUrl}/api/Users/SendEmailFortsbmContactUs`, emailObj)
            .then((res) => {
              alert("Email send successfully");
              console.log("Email send successfully", res);
            })
            .catch((err) => {
              console.log("error while sending email :: ", err);
            });
        })
        .catch((err) => {
          console.log("error while sending data :: ", err);
        });
      setFormData({
        Name: "",
        Phone: "",
        email: "",
        company: "",
        Reason: "",
        comments: "",
      });
      setErrorMessages({
        Name: "",
        Phone: "",
        email: "",
      });
    }
  };
  return (
    <Container maxWidth="xl">
      <LandingPageSmall landingImg={conact} heading="CONTACT" />

      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{
          display: "flex",
          marginTop: "5%",
        }}>
        <Grid item xs={12} md={11}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12} md={6}>
              <h3>CONTACT INFORMATION</h3>
              <p>
                261185 Wagon Wheel Way
                <br />
                Rocky View, Alberta, Canada
                <br />
                T4A 0E2
                <br />
                Tel: 403-277-0700
                <br />
                Toll-Free: 1-866-461-3914
                <br />
                Fax: 1-403-398-9910
              </p>
              <p>
                We are always open to Questions, Comments, or Feedback and thank
                you for taking the time to reach out to us. You may either call
                us, or use the form to get your message to us. We will respond
                in a timely fashion.
              </p>
            </Grid>
            <Grid item xs={12} md={6}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}>
                <Grid container spacing={2} style={{ marginTop: "10px" }}>
                  <Grid item xs={12}>
                    <TextField
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      fullWidth
                    />
                    {errorMessages.Name && (
                      <div style={{ color: "red" }}>{errorMessages.Name}</div>
                    )}
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      fullWidth
                    />
                    {errorMessages.email && (
                      <div style={{ color: "red" }}>{errorMessages.email}</div>
                    )}
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      fullWidth
                    />
                    {errorMessages.email && (
                      <div style={{ color: "red" }}>{errorMessages.email}</div>
                    )}
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Reason for inquiry"
                      name="Reason"
                      value={formData.reason}
                      onChange={handleInputChange}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Comments"
                      name="comments"
                      multiline
                      rows={4}
                      value={formData.comments}
                      onChange={handleInputChange}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      type="submit"
                      className="myBtn"
                      fullWidth>
                      Send
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
    // </Container>
  );
};

export default Contact;
