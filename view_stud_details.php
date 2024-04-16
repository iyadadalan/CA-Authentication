<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>View Student Details</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script></head>
<body>
    <div class="container mt-5">
        <?php
            include('config.php');

            $sql = "SELECT name, matricNo, currentAddress, homeAddress, email, mobilePhoneNo, homePhoneNo FROM students";
            $result = $conn->query($sql);

            if ($result->num_rows > 0) {
                echo "<table class='table table-striped table-bordered'><thead><tr><th>Name</th><th>Matric No</th><th>Current Address</th><th>Home Address</th><th>Email</th><th>Mobile Phone No</th><th>Home Phone No</th></tr></thead><tbody>";
                
                while($row = $result->fetch_assoc()) {
                    echo "<tr><td>".htmlspecialchars($row["name"])."</td><td>".htmlspecialchars($row["matricNo"])."</td><td>".htmlspecialchars($row["currentAddress"])."</td><td>".htmlspecialchars($row["homeAddress"])."</td><td>".htmlspecialchars($row["email"])."</td><td>".htmlspecialchars($row["mobilePhoneNo"])."</td><td>".htmlspecialchars($row["homePhoneNo"])."</td></tr>";
                }

                echo "</tbody></table>";
            } 
            else {
                echo "<p class='alert alert-warning'>0 results</p>";
            }
            $conn->close();
        ?>
        <a href="stud_details.php" class="btn btn-primary mt-3">Back</a>
    </div>
</body>
</html>
