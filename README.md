# Express server for CloudFormation template

Hi ya'll, this is me testing how to set up an express server directly from a CloudFormation template yaml file.

The line
`sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-ports 3000"`
in the ec2 user data is a quick and dirty way to force redirect the proxy server 3000 to the instances port 80 route.
