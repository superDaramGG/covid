import React from "react";
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

class WorldTable extends React.Component {
  state = {
    infoData: [],
    loading: false,
  };

  getMuiTheme = () =>
    createMuiTheme({
      overrides: {
        MUIDataTable: {
          root: {
            backgroundColor: "inherit",
          },
          paper: {
            boxShadow: "none",
          },
        },
        MUIDataTableBodyCell: {
          root: {
            backgroundColor: "none",
          },
        },
      },
    });

  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://corona.lmao.ninja/v2/countries")
      .then((response) => response.json())
      .then((res) => {
        this.setState({ infoData: res, loading: false });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <React.Fragment>
        <div
          style={{
            marginLeft: "10px",
            marginRight: "10px",
            marginBottom: "5px",
          }}
        >
          <MuiThemeProvider theme={this.getMuiTheme()}>
            <MUIDataTable
              title={
                <h1 style={{ float: "left", color: "#3f51b5" }}>
                  전세계 코로나 19 상황보고
                </h1>
              }
              isLoading={this.state.loading}
              columns={[
                {
                  name: "country",
                  label: "국가",
                  options: {
                    filter: true,
                    sort: true,
                  },
                },
                {
                  name: "cases",
                  label: "총 상태",
                  options: {
                    filter: true,
                    sort: false,
                  },
                },
                {
                  name: "todayCases",
                  label: "현재상태",
                  options: {
                    filter: true,
                    sort: false,
                  },
                },
                {
                  name: "deaths",
                  label: "총 사망자수",
                  options: {
                    filter: true,
                    sort: false,
                  },
                },
                {
                  name: "todayDeaths",
                  label: "하루 사망자수",
                  options: {
                    filter: true,
                    sort: false,
                  },
                },
                {
                  name: "recovered",
                  label: "회복자수",
                  options: {
                    filter: true,
                    sort: false,
                  },
                },
                {
                  name: "critical",
                  label: "중증환자수",
                  options: {
                    filter: true,
                    sort: false,
                  },
                },
              ]}
              data={this.state.infoData}
              options={{
                filter: true,
                rowHover: true,
                downloadOptions: { filename: "CovidData.csv", separator: "," },
                filterType: "dropdown",
                selectableRows: false,
                responsive: "stacked",
              }}
            />
          </MuiThemeProvider>
        </div>
      </React.Fragment>
    );
  }
}

export default WorldTable;
