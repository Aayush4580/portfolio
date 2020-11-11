import React from 'react';
import { Avatar, makeStyles } from '@material-ui/core';
import {
  Facebook,
  Instagram,
  LinkedIn,
  MailOutline,
  YouTube,
} from '@material-ui/icons';

export const CustomAvatar = () => {
  const classes = useStyles();
  return (
    <div>
      <Avatar
        alt="Remy Sharp"
        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxANEBAQEBAJEBANDg0NDQ0NDRsQEA4WIB0iIiAdHx8kKDQsJCYxJx8fLTItMSstMDAwIys/ODMuQDQ5OisBCgoKDQ0OERAQFSsZFyUrKzctKysrLTc3LTctNy0tLTctNy0rKysrLSsrKysrKysrKysrKy0rKysrKysrKy0rK//AABEIAMgAyAMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAAAQQFBgIDBwj/xAA+EAABBAAEBAMECAUCBwEAAAABAAIDEQQFEiEGMUFRImFxBxOBkRQjMkKhscHRM1Jy4fBiYxYkQ0SCsvEV/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAIhEBAQACAgMBAQADAQAAAAAAAAECEQMSITFBBCIUMmET/9oADAMBAAIRAxEAPwDtqUJEqQCEITBUJEqARKkJrfoLVRz3it8fvfcNbph0tdI4Euc870B+6AtrnAb2OvNMpcczanAm6pcpxvG2Le9zXlzAC22jkD0H7rCb2hxHSJdQdHZZOwcz0sdVXUOj5znAw7HEmiSGM7E9z6LnWbZ99IDw10YiBGt/OSd3rzr8FVeMeMDmDoY2FxtjbazqSo33gZbXeNzSA7Q668lUhLjgOK/ohPumvBFlr/e8/Ig8wrflPtQgk8M0UjHADdrhTlx4lkdnne4YGanLMO1faeGg0SNrb6o1sPRWW8RYXEkNZKzW7lG7wuP7qWteZW40hzS2UN0kUY3b+RVgj4xxYbf0mYuaCPFJqHrSnqHe0WqJwLxwMXWHxDmCfYRPAoTevY/mr2pvgwhCEAIQhACEIQAhCEBglRaAgBCEIASoSFAMc5xPuoZHWG00jUel7Li+f5q6N7Qx1usz/Vmzr5WSrV7XOJBB7vCsLi41LLpvwjouVtxLnRk3vJqcBVqsYRrmWZSEvrU5xJtx7k7+qgMeXuO53rop1kFsJsAmqJFn4/so7HsG2kOIF25xo+aoMMulEek1vQF9SFKNxrGgk0AL2Dj6/H1VbdNRJrlQCwme5/Muo3QS2EtJmJkJJe2NrR913if6lKzHMA1AxvIoVVv/ABUGWk7cgBdJGt69kbCzw5lAQLcCfvNLC0j4rfO9t20tcxwFOAojyKr+AjN2KJJA0lupSUBaCWlr2kktB5Uf87phMZXmLobov6EdDz6Fdq4B44Zjw3Dy6m4hrTTnfZmA7ea4J77R4XtPhOoHqFMZfjCx7JIy4SNIdG4H7w3/ACRfIenAhMsmxwxWHhmFVLGx5rvW4+aerMyJUiEApQgoQAUIQgNQWaxSpAqChCYC14iQMY5x2DWucT5ALYmecNvDzi6JhlAI/pKA84cS527F4mWY7GTUdvut5CgmGHeTGwHawAAD0G6xxTfq3fzE7/FbMTO2GMkVrBjbfSiAtAi8ZmDhIGNHiBA0gdOywmnFFoLiTtRCMUz3kjyyg99u+Hkp3I+HnuZs026i6R36BZ5ckx9tePiuasPwrn9CDXIrOPBuqjtyrUNiuhxcGu61fUpw3g2wASXD+lZ/+saf41cxbgnF1dTsVIvyR4j5ONjYltLqWUcIQxGyxpIv7QU9LlUZFaW1XZZ5cl+NMOHGe3nr3ZiPiMjK5ABPcLjXj+GWvsnaSrd5Lo/FfCrJGkgVVnZc1x2TPgt4Iphadjvv1WvFy9vFZc3B18z0cyYrVRotc005p+7/AGTzCyC2Dk1+kt7AqFxMpL3B1HYN1dx0TvAyl7DGLJaHFhHSt1u5nZPZrxKYJhhZHXFiSRFf/Tk7ehXWl5vyGbWIng/WMe2TzBFFejWGwD3AKnI2doWI/dZKQEICQoBUISIDFKktCQLaEiEAqhuMMeMLgsTIeYiexn9RFD81MKme1bEacE2Ic8RPGz/xFud+ATgcLkd9Q4jn7xtEjsd03zJ4lLttngbD0UjjH0wsoEEWK8xah5fsjz5FaU9JLhjCCYjWG64qjvq8cwum5FhgwCthQXPeBME6SQyF1iMkEVva6fghX4Lh5fOT0eLxxpaKJtbALcQB0C1xHZZ2UiFDsloFYElGpGxoxzOEOaQuV8XYQsa9wHLc7dOq6xjTYPwVczPLo5mPY5oOoOFnolLq7ipNzVcNcKcb6qXyXwSNvULdqsdBVLdn2Ve6Yx5BB1FjhXMjb9FojhL2MfZoNcDXSqr9F2ceW48/kw61L5NiSyc702z8D/lL07lsmuGJ380UbvwC8pMGgmjYNEE86XqHhl14PCnqcND/AOoVZISiLQkUBkkQhMBCEIDBCRLaQCVIhAFrmHtlxVOwkd0Gl0hPr4V09c59s2EaYYJSDYmEd9huU8fYcsxcF+RbG4UetHZMcrw5mlawkubpJAHRSWMNsoHfcebey3cCQanPkI3YHMIrkU+S6jTim8lvyjLo8MygGNvme6sWHjaADfPkqgJZHOc7TqIJEbb8Df3TLGtzJ3jGonzfpodqXL1l+uy5X5HSIXDunFtK5Ll+e4mF1S6tiLF2rblOeGY15bEKLdKmNq2UO6DShJcW5oJ3obqt5hxS6PcHlexS7bPpV0xEYcojExFqo8fGmIe6gybruGWE7Znk79y6Tp4XMoj1V9PqO+jbjXAEwyEAUXCUH+U9VQ8vxZET4jZLnNc09P8AOS6gzFNxcbmObTqILT97zXJ4m/WOsbMLtXTYHktuLx4c/Pq6qWwbw8aXinRW2+pFr0twPNry/CH/AGIxfetv0XlnCy6nOd1JGwXov2PyOdlrA6/BLK1t9uf6ra+nOvCEIUAqRCVACRBQgNaVCQIBUBCAgFVX9o2WnFZfM1o1Pi0zMAG5I5/has6QoDy0ZC1+nmXEDTe9q88H5Y+CKQymAOklB/jNcfK6K059l0OInxjPozYxFJLpkj5Xz5LbwfgQ3DNc0U4ve6gOe/8AZTlnLHTjxXGxKZpLFAK0EWSHPLyXfABV3N88xGFLWiGNrXBrm6vG6r6q34zBiQk7OBJ0m0xflkvIHw7bO3WXaT43mFv1DxZfJP7uSeJjDK3U18VAt8nD0U3gMLDhXtH1hfv4Gt16u1dlvgw5iaS4uc4ihZ5LLIsMXYh8hILWgMYG8uW/xU5WVUln1vzDFtI0ujxEeoHxOaCD8lV8xyWFgdIWyPBJprCdZPkFc+IcKZIXtaSCWOojvSiMDCHtbroh7RfI0e6jGw7v4gMNmOFwLxHJg47JZqJmfrFi9/wUu+XDS6ToxkJeA5rNYexw8r/da8xyx5cC6OGYNvQXsvSszhnyUZK8P2WgUAtu2NmtMrhlLuVtbl4ZUjPE0/e00R6rj3FEAixk8bdgH6vnv+q7TiIZBHG0OfHbZHEtNHSTQ/IrmHG+Ce7E1qBDQN9A1WQOZ6quPUrLllsiK4ayx887I2AF7pAG3yHqvUnDmVNwOGigG5Y23uqtTjuT81yX2RcJh8rcUJGyRxNAcOVSXy8xS7Ytd7c9ll1ShCQFBSIJUiVAFpEBCAwRaRCYKChCEAqS0ISDmObsGGxON1Cw5xfXcO2THhjaBo7Fw/FWbjnAh0rTuBPFoc5o5EGwq9l0RiL2GtnBzSOoIXNrVsejjZljjU/BE143a0nuQh+CZ/IFhgphyT3Vdb8uyhXpGT4QVs1g86T3KoQ0AAdVliBsfLdVrAcVyOxDmfRMY2NurTNp8BA6oP3PC4Y2Lw+tqusw1PNAb2Vpzbixwhc+OHETaPtNibZCXIsz+lsEhjlic0lr45PtBL/pyWe0jpNV4h5rD3R5apPXYfongeFokeEbpahrOOe5JrmSqqzDslzCQPFgQtc0HlqpWedyhMJBc756FNDowerjyV43xUWTcXj2bYX3WGk/1zOcKVuTDJsIIII2AAU0F3mTzT5dOM1HDyXtlaVCAUJoFotIhAKhIhAYISBKmAhIltACEIQERxJAXRtcB9hxs9gVR8WNMo7OYfwK6e5oIIIBB2IPVQWbcOwOZJIyMCUDU11nbuAsssN3bfj5ZJqqiySk9hxOyinuo/JbGyV+K57NV2zzEuMSmboib0g1R2HJQEvEkbZDE0Oe9vMAE/ksDxO+6LMTsQLbGaH4J9TkvxLw4ZzLLW6e5b1TqABg5CybPmVXncSnp789fDGf2WA4sjH8UaL+8WlvzR1Oyz2tBl6LTJMmcOKbK0PabDuRWLpFOiZzzU1x7AlPcjwG0QcLJc016m02yvBjFzMhdq0usyUaNBX7Lsmjw5sGRxb9kvN6VvjhdRzZ8slqSApFoQtnGW0FCEAJLQhACVY2hAY2hIEWmCpUiEAJUiVACQ/uhBNboDlOaH3WIljPJsjtJ8lpklsUnvFUWqeUjmHFzVD4ebVseY5grDKbd/HdSHMIbH4gACeZA3T6DO427OEJPUk7pgYyeSZzcLNxW8r3MHQtG5Wcy06Fh/8A3ICD4YCa6HkovEYhkwILYy0/d0ghRP8AwHHDbmTPcRya7ZOYcM6PYgbbJ3KfAcxVHs3YdAFlJNQu+QWjlzTVjvfuofYYSHf6lWOP2scr8i0cFYprMRreQA9rmNJPddLC5EyLxQAD/ucPt8V1iF2wvyW+PmOLmmsm1CEqGYtIhCAEFCCgBKsUJhgEJLSoBUApEqAVKsb7rU6bt809Btc6lpdKHDbkCmr5S4lrQSb02e/X5JwYg1lDkAqmOkXLblrMd9K97J/v4hnycR+iYYrDkHU2gdviovhLFH/mYzdx4zEg/FxKnZD/AIFyZ3WT1OKS4Q0jzTTs4UexWYzwVzFLXisMx43APNVfN8ufFbonSCugKX832v8ArFajnje6wObM53t1XOGT4l7tJJ519lWTK8sLqMjnHbkeSfXCfU9s78SpxbsSdLNQZ9552v0U1gcMI2gDkAE3wkDWjbYCtk/aUssvhzHTfl41YnDN7zBx9ACV05gsfBc14XiMuPadi3DxOcf6nbD8AV0yIbLp4v8AV5/6L/bCCc7tcKLTRH5FbhIO/wA02nj8QeOYGl3mFiXA30IV3HbGU+SFaY5DQuitgcD/AHUWK2yJQgpEjCEqEw1WlBSIQCgpS5IsavZOTZWtbyT6LCawNuZprfVbvLqsmRjbuLpWlqw0AYO53FrbINisyEVYKZPPEDDhM0zCA2A6d8zL6gn+6sWu0e1rKvouJw+PYKDpDh8QfXdp/NNoZbAPelxc81k9T8t3hpukTHFxWE9tapGrHbq0gm4ZodfVScDUpw4u6TljQE9lYzhdXMpy6cNFnYDclNgVoGGdi54sK0lpmd43D7rBu7/PNPHzZEZWSWr7wNgHMYZHgB09Sejfuj5K6xt2TPAYYMAAFBoa0ADkApFoXfPE08fLLeVrVVptJHRv0T2qWqYbJpam7V53utgCwPIeRStFHa0gzBWSRn5rKktKlIhJaRSe2CVqUNQQqkLbK6WNJRslVExA3r5rbSb+8DdTiQA0bk8gFVMz9omHikdFFHPO5tW9tMZ+6clvotye1zISdP1K5JmPtOxj7ZFDh4t9n7yOHz2UVDmeIxJuebEP1cw55r5K5xZfUd58dK46yduPwOIi8JJaXxkG6eNx+S5HkMpdEAebaaV0n2fYd8JxEbtRil0zR6uV8j+irmZ5C7B4mTw1FLI50ThuK515Lm/Rh4d34+TV1Ua0rXKU+kwpCbyQlcNepDKj3W2EfFZGIrfBEUtnpi/YWp/2b5WJZJcY4E7nDw9q5uPzoLDJeHzjHkOLmxMAL3N5nsArsIWYWIQwNYwNaQ1rPu3zPquvgwvuvP8A18sk6xyrjzP55MTMGyTMijkdFExjy0OrYlQmQZnjWya458WKNbSkj5FXnPeFmyBzz0DnKQ4f4XbBhGtI+slJe49r6fJelLjMXlatrdkXG8pafpDWvDC1rnMbpf60rnhcbHO3VG5rh17j1VNxmQtiidpbzoFSOT4A4d4kBPiZ7t4HJ3ZY5SfFzaxn7JWMZ3HoiM7FYRnxN9CoUcgeqzv/AOLD+6BukbOkIpCAxIWt3hQhAKPzWSRCYaMThBI0td9k3Y7qrZdw9C92KmLWkunkYwVs0N2CEKsbqJs22t4Pw/MtsmjyW2PhyCPcMb8QhCfal1iUw0QYBp2rsthY2XwPF2CCO4QhTVS6Q2ZcPBoJjstH3Tu4Kt4jBV07pULh58ZL4en+XkyynloGCvot0OAJLWtHicQ1opCFhjPLqytkq8YPDjDQiMVY5kbaj1KQN+J7oQvVxmpI8LPK22tGIw/vS2PoTqfXYdPipBjQT5DYJUJ2lI2OiDgQeqwdCA2uxBSoSNtiA0/BN4j4m/FCEA8d+6Gdxy6JEKTbB5oQhAf/2Q=="
        className={classes.large}
      />
      <div>
        <YouTube
          style={{ cursor: 'pointer', height: 60, width: 60, padding: 0 }}
        >
          filled
        </YouTube>
        <LinkedIn
          style={{ cursor: 'pointer', height: 50, width: 50, padding: 5 }}
        >
          filled
        </LinkedIn>
        <Instagram
          style={{ cursor: 'pointer', height: 50, width: 50, padding: 5 }}
        >
          filled
        </Instagram>
        <Facebook
          style={{ cursor: 'pointer', height: 50, width: 50, padding: 5 }}
        >
          filled
        </Facebook>
        <MailOutline
          style={{ cursor: 'pointer', height: 50, width: 50, padding: 5 }}
        >
          filled
        </MailOutline>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
}));
