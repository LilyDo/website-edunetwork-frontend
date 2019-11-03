import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class DashboardChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      config: {
        chart: {
          id: 'Commission-Revenure-Chart',
          fontFamily: 'Muli-Regular',
          fontSize: 20,
        },
        xaxis: {
          categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
          ],
          labels: {
            style: {
              colors: [
                '#97A4BA',
                '#97A4BA',
                '#97A4BA',
                '#97A4BA',
                '#97A4BA',
                '#97A4BA',
                '#97A4BA',
                '#97A4BA',
                '#97A4BA',
                '#97A4BA',
                '#97A4BA',
                '#97A4BA',
              ],
              fontSize: '12px',
            },
          },
        },
        yaxis: {
          labels: {
            style: {
              color: '#97A4BA',
              fontSize: '12px',
            },
          },
        },
        legend: {
          fontFamily: 'Muli-Bold',
          fontSize: '14px',
          labels: {
            colors: '#97A4BA',
          },
          itemMargin: {
            horizontal: 20,
            vertical: 40,
          },
        },
        colors: ['#D59E29', '#3794FC'],
        endingshape: ['rounded'],
        fill: {
          color: ['red'],
        },
      },
      dataArray: [
        {
          name: 'Total group revenue',
          data: this.props.data.revenueByMonth,
        },
        {
          name: 'Commission',
          data: this.props.data.commissionByMonth,
        },
      ],
    };
  }

  render() {
    return (
      <Chart
        options={this.state.config}
        series={[
          {
            name: 'Total group revenue',
            data: this.props.data.revenueByMonth,
          },
          {
            name: 'Commission',
            data: this.props.data.commissionByMonth,
          },
        ]}
        type="bar"
        height={450}
      />
    );
  }
}

export default DashboardChart;
