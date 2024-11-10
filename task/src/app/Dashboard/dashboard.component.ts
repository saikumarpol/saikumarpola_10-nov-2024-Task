import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Chart } from 'chart.js/auto'; // Make sure to install chart.js with: npm install chart.js

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.styles.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  username: string | null = null;
  charts: Chart[] = [];

  // Static table data
  tableData: any[] = [
    { id: 1, name: 'John Doe', age: 25, city: 'New York' },
    { id: 2, name: 'Jane Smith', age: 28, city: 'Los Angeles' },
    { id: 3, name: 'Sam Wilson', age: 22, city: 'Chicago' },
    { id: 4, name: 'Emma Brown', age: 30, city: 'Houston' },
    { id: 5, name: 'Michael Johnson', age: 35, city: 'Phoenix' }
  ];

  // Dummy chart data
  chartData: any[] = [
    { title: 'Chart 1', data: [10, 20, 30, 40] },
    { title: 'Chart 2', data: [50, 60, 70, 80] },
    { title: 'Chart 3', data: [5, 15, 25, 35] },
    { title: 'Chart 4', data: [30, 40, 50, 60] },
    { title: 'Chart 5', data: [100, 110, 120, 130] }
  ];

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const currentUser = this.getCurrentUser();
    if (currentUser) {
      this.username = currentUser.username;
    }
  }

  ngAfterViewInit() {
    this.initializeCharts();
  }

  initializeCharts() {
    this.chartData.forEach((data, index) => {
      const canvas = document.getElementById(`chart${index}`) as HTMLCanvasElement;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          this.charts.push(new Chart(ctx, {
            type: 'line',
            data: {
              labels: ['Q1', 'Q2', 'Q3', 'Q4'],
              datasets: [{
                label: data.title,
                data: data.data,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                tension: 0.3
              }]
            },
            options: {
              responsive: true,
              plugins: {
                title: {
                  display: true,
                  text: data.title
                }
              },
              scales: {
                y: {
                  beginAtZero: true
                }
              }
            }
          }));
        }
      }
    });
  }

  getCurrentUser() {
    const user = { username: 'John Doe' };
    return user;
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}