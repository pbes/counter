# counter
Sample counter web application for Docker lessons

### Prerequisites
- Linux 64 bit
- Docker 1.10+

### Running
    git clone https://github.com/pbes/counter.git
    cd counter
    docker build -t counter .
    docker run -d -p <host port>:3000 counter

### Usage
- HTTP GET /: get current counter value
- HTTP PUT /inc: increment counter by 1
- HTTP PUT /dec: decrement counter by 1
