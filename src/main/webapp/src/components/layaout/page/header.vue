<template>
  <div class="container">
    <div class="row clearfix">
      <div class="col-md-12 column">
        <nav class="navbar navbar-default navbar-inverse" role="navigation">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"> <span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button> <a class="navbar-brand" href="#">Brand</a>
          </div>

          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li class="active">
                <a href="#">Link</a>
              </li>
              <li>
                <a href="#">Link</a>
              </li>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown<strong class="caret"></strong></a>
                <ul class="dropdown-menu">
                  <li>
                    <a href="#">Action</a>
                  </li>
                  <li>
                    <a href="#">Another action</a>
                  </li>
                  <li>
                    <a href="#">Something else here</a>
                  </li>
                  <li class="divider">
                  </li>
                  <li>
                    <a href="#">Separated link</a>
                  </li>
                  <li class="divider">
                  </li>
                  <li>
                    <a href="#">One more separated link</a>
                  </li>
                </ul>
              </li>
            </ul>
            <form class="navbar-form navbar-left" role="search">
              <div class="form-group">
                <input type="text" class="form-control" />
              </div> <button type="submit" class="btn btn-default">Submit</button>
            </form>
            <ul class="nav navbar-nav navbar-right">
              <li>
                <a href="#">Link</a>
              </li>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown<strong class="caret"></strong></a>
                <ul class="dropdown-menu">
                  <li>
                    <a href="#">Action</a>
                  </li>
                  <li>
                    <a href="#">Another action</a>
                  </li>
                  <li>
                    <a href="#">Something else here</a>
                  </li>
                  <li class="divider">
                  </li>
                  <li>
                    <a href="#">Separated link</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

        </nav>
        <ul class="breadcrumb">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Library</a>
          </li>
          <li class="active">
            Data
          </li>
        </ul>
        <table class="table table-striped">
          <thead>
          <tr>
            <th>
              编号
            </th>
            <th>
              产品
            </th>
            <th>
              交付时间
            </th>
            <th>
              状态
            </th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>
              1
            </td>
            <td>
              TB - Monthly
            </td>
            <td>
              01/04/2012
            </td>
            <td>
              Default
            </td>
          </tr>
          <tr class="success">
            <td>
              1
            </td>
            <td>
              TB - Monthly
            </td>
            <td>
              01/04/2012
            </td>
            <td>
              Approved
            </td>
          </tr>
          <tr class="error">
            <td>
              2
            </td>
            <td>
              TB - Monthly
            </td>
            <td>
              02/04/2012
            </td>
            <td>
              Declined
            </td>
          </tr>
          <tr class="warning">
            <td>
              3
            </td>
            <td>
              TB - Monthly
            </td>
            <td>
              03/04/2012
            </td>
            <td>
              Pending
            </td>
          </tr>
          <tr class="info">
            <td>
              4
            </td>
            <td>
              TB - Monthly
            </td>
            <td>
              04/04/2012
            </td>
            <td>
              Call in to confirm
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index.vue"
  }
</script>

<style scoped>

</style>
