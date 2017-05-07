var React = require('react');
var {Link} = require('react-router');

var Extra = (props)=>{
  return (
    <div>
      <h1 className="text-center page-title">Extra</h1>
      <p>Here are a few extra example locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=ForestHills'>Forest Hills, NY</Link>
        </li>
        <li>
          <Link to='/?location=Nanjing'>Nanjing, China</Link>
        </li>
      </ol>
    </div>
  );
}

module.exports = Extra;
