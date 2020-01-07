Connect-AzAccount
set-AzWebApp `
 -Name heliosappgateway `
 -ResourceGroupName helios-learning `
 -HostNames @("vishnu.apihcdevcloud.com","heliosappgateway.azurewebsites.net")