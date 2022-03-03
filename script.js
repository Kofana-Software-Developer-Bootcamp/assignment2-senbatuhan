//Required for Handling CORS Error
jQuery.ajaxPrefilter(function (options) {
  if (options.crossDomain && jQuery.support.cors) {
    options.url = "https://cors-anywhere.herokuapp.com/" + options.url;
  }
});

// Addition
$(function () {
  // the following event handler will handle click events for BUTTON
  $("#Add").on("click", function (event) {
    //clear error text when the new operation called
    $("#errmsg").text("");
    var intA = $("#intA").val();
    var intB = $("#intB").val();

    var soapRequest = `<?xml version="1.0" encoding="utf-8"?>
            <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
                    <soap:Body>
                        <Add xmlns="http://tempuri.org/">
                            <intA>${intA}</intA>
                            <intB>${intB}</intB>
                        </Add>
                    </soap:Body>
            </soap:Envelope>`;

    var webserUrl = "http://www.dneonline.com/calculator.asmx";
    var self = this;
    self.disabled = true;
    $.ajax({
      type: "POST",
      url: webserUrl,
      dataType: "xml",
      processData: false,
      contentType: 'text/xml; charset="utf-8"',
      data: soapRequest,
      success: function (data, status, req) {
        if (status == "success") {
          var result = $(req.responseXML).find("AddResult").text();
          $("#Result").text(result);
        }
      },
      error: function (data, status, req) {
        fetch(webserUrl)
          .then((response) => {})
          .catch((error) => {
            $("#errmsg").text(error);
          });
      },
      complete: function (data, status) {
        self.disabled = false;
      },
    });
  });
});
//Substract
$(function () {
  // the following event handler will handle click events for BUTTON
  $("#Substract").on("click", function (event) {
    //clear error text when the new operation called
    $("#errmsg").text("");
    var intA = $("#intA").val();
    var intB = $("#intB").val();

    var soapRequest = `<?xml version="1.0" encoding="utf-8"?>
              <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
                      <soap:Body>
                      <Subtract xmlns="http://tempuri.org/">
                              <intA>${intA}</intA>
                              <intB>${intB}</intB>
                          </Subtract>
                      </soap:Body>
              </soap:Envelope>`;

    var webserUrl = "http://www.dneonline.com/calculator.asmx";
    var self = this;
    self.disabled = true;
    $.ajax({
      type: "POST",
      url: webserUrl,
      dataType: "xml",
      processData: false,
      contentType: 'text/xml; charset="utf-8"',
      data: soapRequest,
      success: function (data, status, req) {
        if (status == "success") {
          var result = $(req.responseXML).find("SubtractResult").text();
          $("#Result").text(result);
        }
      },
      error: function (data, status, req) {
        fetch(webserUrl)
          .then((response) => {})
          .catch((error) => {
            $("#errmsg").text(error);
          });
      },
      complete: function (data, status) {
        self.disabled = false;
      },
    });
  });
});
//Divide
$(function () {
  // the following event handler will handle click events for BUTTON
  $("#Divide").on("click", function (event) {
    //clear error text when the new operation called
    $("#errmsg").text("");
    var intA = $("#intA").val();
    var intB = $("#intB").val();

    var soapRequest = `<?xml version="1.0" encoding="utf-8"?>
                <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
                        <soap:Body>
                        <Divide xmlns="http://tempuri.org/">
                                <intA>${intA}</intA>
                                <intB>${intB}</intB>
                            </Divide>
                        </soap:Body>
                </soap:Envelope>`;

    var webserUrl = "http://www.dneonline.com/calculator.asmx";
    var self = this;
    self.disabled = true;
    $.ajax({
      type: "POST",
      url: webserUrl,
      dataType: "xml",
      processData: false,
      contentType: 'text/xml; charset="utf-8"',
      data: soapRequest,
      success: function (data, status, req) {
        if (status == "success") {
          var result = $(req.responseXML).find("DivideResult").text();
          $("#Result").text(result);
        }
      },
      error: function (data, status, req) {
        fetch(webserUrl)
          .then((response) => {})
          .catch((error) => {
            $("#errmsg").text(error);
          });
      },
      complete: function (data, status) {
        self.disabled = false;
      },
    });
  });
});
//Multiply
$(function () {
  // the following event handler will handle click events for BUTTON
  $("#Multiply").on("click", function (event) {
    //clear error text when the new operation called
    $("#errmsg").text("");
    var intA = $("#intA").val();
    var intB = $("#intB").val();

    var soapRequest = `<?xml version="1.0" encoding="utf-8"?>
                  <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
                          <soap:Body>
                          <Multiply xmlns="http://tempuri.org/">
                                  <intA>${intA}</intA>
                                  <intB>${intB}</intB>
                              </Multiply>
                          </soap:Body>
                  </soap:Envelope>`;

    var webserUrl = "http://www.dneonline.com/calculator.asmx";
    var self = this;
    self.disabled = true;
    $.ajax({
      type: "POST",
      url: webserUrl,
      dataType: "xml",
      processData: false,
      contentType: 'text/xml; charset="utf-8"',
      data: soapRequest,
      success: function (data, status, req) {
        if (status == "success") {
          var result = $(req.responseXML).find("MultiplyResult").text();
          $("#Result").text(result);
        }
      },
      error: function (data, status, req) {
        fetch(webserUrl)
          .then((response) => {})
          .catch((error) => {
            $("#errmsg").text(error);
          });
        //$("#errmsg").text(data.responseText);
      },
      complete: function (data, status) {
        self.disabled = false;
      },
    });
  });
});
