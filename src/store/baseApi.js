import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const baseQuery = fetchBaseQuery({
    baseUrl:"http://localhost:8080",
    prepareHeaders: (headers) => {
    //   headers.set('WebLocation', window.location.href);
      const token = localStorage.getItem('token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  });

  export const baseApi = createApi({
    reducerPath: 'taskManagementApi',
    baseQuery,
    tagTypes: [
      // 'Appreciation',
      // 'UserAuth',
      // 'Client',
      // 'Dashboard',
      // 'Designation',
      // 'DepartmentTypes',
      // 'DeviceTypes',
      // 'Employee',
      // 'Candidate',
      // 'Holiday',
      // 'Leave',
      // 'LeaveType',
      // 'Project',
      // 'Todo',
      // 'Notification',
      // 'Faqs',
      // 'Ticket',
      // 'TicketChat',
      // 'Filter',
      // 'Reactions',
      // 'Comments',
      // 'Moderation',
      // 'RolesAndPermissions',
      // 'SalaryMonth',
      // 'SalaryStructure',
      // 'generateSalary',
      // 'Payslip',
      // 'ImportExport',
      // 'Customize',
      // 'ReviewProfile',
      // 'ReviewMatrix',
      // 'ReviewCycle',
      // 'ReviewScoresheet',
      // 'ReviewDashboard',
      // 'ExternalReview',
    ],
    endpoints: () => ({}),
  });