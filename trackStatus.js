import React from 'react';

function TrackStatus(props) {
  return (
    <div className="status-list">
      <table>
        <thead>
          <tr>
            <th>College Name</th>
            <th>Application Number</th>
            <th>Application Status</th>
            <th>Courses Applied</th>
          </tr>
        </thead>
        <tbody>
          {props.data.KIIT && props.data.KIIT.length > 0 && props.data.KIIT.map((item) =>
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.id}</td>
              <td>{item.status}</td>
              <td>{item.course}</td>
            </tr>
          )}
          {props.data.CET && props.data.CET.length > 0 && props.data.CET.map((item) =>
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.id}</td>
              <td>{item.status}</td>
              <td>{item.course}</td>
            </tr>
          )}
          {props.data.ITER && props.data.ITER.length > 0 && props.data.ITER.map((item) =>
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.id}</td>
              <td>{item.status}</td>
              <td>{item.course}</td>
            </tr>)}

        </tbody>
      </table>



    </div>

  );
}

export default TrackStatus;