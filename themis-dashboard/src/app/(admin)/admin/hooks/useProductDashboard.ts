// import { useEffect, useState } from 'react';

// // Define the structure of the metrics data
// interface MetricsData {
//   activeUsers: { name: string; value: number }[];
//   activeUsersVsSignups: { name: string; value: number }[];
//   casebriefsVsProcessingTime: { name: string; value: number; value2: number }[];
//   signupsVsCasebriefs: { name: string; value: number; value2: number }[];
// }

// const useProductMetrics = () => {
//   const [metrics, setMetrics] = useState<MetricsData | null>(null); // Set the type for metrics
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     // Replace with actual data fetching logic
//     const fetchData = async () => {
//       try {
//         // Mocked data example
//         const response = await fetch('/api/product-metrics'); // Adjust API endpoint as necessary
//         const data = await response.json();

//         // Mock data if needed
//         const mockData: MetricsData = {
//           activeUsers: [
//             { name: 'Week 1', value: 30 },
//             { name: 'Week 2', value: 45 },
//             // More mock data
//           ],
//           activeUsersVsSignups: [
//             { name: 'Week 1', value: 207 },
//             { name: 'Week 2', value: 150 },
//             // More mock data
//           ],
//           casebriefsVsProcessingTime: [
//             { name: 'Week 1', value: 300, value2: 150 },
//             // More mock data
//           ],
//           signupsVsCasebriefs: [
//             { name: '2024-08-01', value: 15, value2: 10 },
//             // More mock data
//           ],
//         };

//         setMetrics(mockData);
//         setLoading(false);
//       } catch (err) {
//         setError('Failed to fetch product metrics data');
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return { metrics, loading, error };
// };

// export default useProductMetrics;


import { useEffect, useState } from 'react';

// Define the structure of the metrics data
interface MetricsData {
  activeUsers: { name: string; value: number }[];
  activeUsersVsSignups: { name: string; value: number }[];
  casebriefsVsProcessingTime: { name: string; value: number; value2: number }[];
  signupsVsCasebriefs: { name: string; value: number; value2: number }[];
}

const useProductMetrics = () => {
  const [metrics, setMetrics] = useState<MetricsData | null>(null); // Set the type for metrics
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Dummy data to use instead of fetching from an API
    const mockData: MetricsData = {
      activeUsers: [
        { name: 'Week 1', value: 30 },
        { name: 'Week 2', value: 45 },
        { name: 'Week 3', value: 50 },
        { name: 'Week 4', value: 40 },
        { name: 'Week 5', value: 55 },
      ],
      activeUsersVsSignups: [
        { name: 'Week 1', value: 207 },
        { name: 'Week 2', value: 150 },
        { name: 'Week 3', value: 190 },
        { name: 'Week 4', value: 175 },
        { name: 'Week 5', value: 200 },
      ],
      casebriefsVsProcessingTime: [
        { name: 'Week 1', value: 300, value2: 150 },
        { name: 'Week 2', value: 350, value2: 180 },
        { name: 'Week 3', value: 330, value2: 160 },
        { name: 'Week 4', value: 400, value2: 200 },
        { name: 'Week 5', value: 420, value2: 210 },
      ],
      signupsVsCasebriefs: [
        { name: '2024-08-01', value: 15, value2: 10 },
        { name: '2024-08-02', value: 20, value2: 15 },
        { name: '2024-08-03', value: 25, value2: 18 },
        { name: '2024-08-04', value: 30, value2: 20 },
        { name: '2024-08-05', value: 35, value2: 25 },
      ],
    };

    // Simulate data fetching delay
    setTimeout(() => {
      setMetrics(mockData);
      setLoading(false);
    }, 1000); // Delay to mimic real data fetching

  }, []);

  return { metrics, loading, error };
};

export default useProductMetrics;

