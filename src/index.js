import niko from 'niko-home-control';

export default () => {
  niko.init({
    ip: '192.168.1.5',
    port: 8000,
    timeout: 20000,
    events: true
  });

  niko
    .listLocations()
    .then(function (response) {
      console.log(response);
    });

  niko
    .systemInfo()
    .then(function (response) {
      console.log(response);
    });
}
