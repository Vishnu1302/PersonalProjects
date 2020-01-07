$filePath = 'C:\BusinessPurpose\homekrafts\dist.zip'
#Connect-AzAccount
Publish-AzWebApp -ArchivePath $filePath -Name 'helioslearnapp' -ResourceGroupName 'wfm-oa-dev-rg' -Force