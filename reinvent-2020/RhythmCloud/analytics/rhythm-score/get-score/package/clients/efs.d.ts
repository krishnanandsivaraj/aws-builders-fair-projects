import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class EFS extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: EFS.Types.ClientConfiguration)
  config: Config & EFS.Types.ClientConfiguration;
  /**
   * Creates an EFS access point. An access point is an application-specific view into an EFS file system that applies an operating system user and group, and a file system path, to any file system request made through the access point. The operating system user and group override any identity information provided by the NFS client. The file system path is exposed as the access point's root directory. Applications using the access point can only access data in its own directory and below. To learn more, see Mounting a File System Using EFS Access Points. This operation requires permissions for the elasticfilesystem:CreateAccessPoint action.
   */
  createAccessPoint(params: EFS.Types.CreateAccessPointRequest, callback?: (err: AWSError, data: EFS.Types.AccessPointDescription) => void): Request<EFS.Types.AccessPointDescription, AWSError>;
  /**
   * Creates an EFS access point. An access point is an application-specific view into an EFS file system that applies an operating system user and group, and a file system path, to any file system request made through the access point. The operating system user and group override any identity information provided by the NFS client. The file system path is exposed as the access point's root directory. Applications using the access point can only access data in its own directory and below. To learn more, see Mounting a File System Using EFS Access Points. This operation requires permissions for the elasticfilesystem:CreateAccessPoint action.
   */
  createAccessPoint(callback?: (err: AWSError, data: EFS.Types.AccessPointDescription) => void): Request<EFS.Types.AccessPointDescription, AWSError>;
  /**
   * Creates a new, empty file system. The operation requires a creation token in the request that Amazon EFS uses to ensure idempotent creation (calling the operation with same creation token has no effect). If a file system does not currently exist that is owned by the caller's AWS account with the specified creation token, this operation does the following:   Creates a new, empty file system. The file system will have an Amazon EFS assigned ID, and an initial lifecycle state creating.   Returns with the description of the created file system.   Otherwise, this operation returns a FileSystemAlreadyExists error with the ID of the existing file system.  For basic use cases, you can use a randomly generated UUID for the creation token.   The idempotent operation allows you to retry a CreateFileSystem call without risk of creating an extra file system. This can happen when an initial call fails in a way that leaves it uncertain whether or not a file system was actually created. An example might be that a transport level timeout occurred or your connection was reset. As long as you use the same creation token, if the initial call had succeeded in creating a file system, the client can learn of its existence from the FileSystemAlreadyExists error.  The CreateFileSystem call returns while the file system's lifecycle state is still creating. You can check the file system creation status by calling the DescribeFileSystems operation, which among other things returns the file system state.  This operation also takes an optional PerformanceMode parameter that you choose for your file system. We recommend generalPurpose performance mode for most file systems. File systems using the maxIO performance mode can scale to higher levels of aggregate throughput and operations per second with a tradeoff of slightly higher latencies for most file operations. The performance mode can't be changed after the file system has been created. For more information, see Amazon EFS: Performance Modes. After the file system is fully created, Amazon EFS sets its lifecycle state to available, at which point you can create one or more mount targets for the file system in your VPC. For more information, see CreateMountTarget. You mount your Amazon EFS file system on an EC2 instances in your VPC by using the mount target. For more information, see Amazon EFS: How it Works.   This operation requires permissions for the elasticfilesystem:CreateFileSystem action. 
   */
  createFileSystem(params: EFS.Types.CreateFileSystemRequest, callback?: (err: AWSError, data: EFS.Types.FileSystemDescription) => void): Request<EFS.Types.FileSystemDescription, AWSError>;
  /**
   * Creates a new, empty file system. The operation requires a creation token in the request that Amazon EFS uses to ensure idempotent creation (calling the operation with same creation token has no effect). If a file system does not currently exist that is owned by the caller's AWS account with the specified creation token, this operation does the following:   Creates a new, empty file system. The file system will have an Amazon EFS assigned ID, and an initial lifecycle state creating.   Returns with the description of the created file system.   Otherwise, this operation returns a FileSystemAlreadyExists error with the ID of the existing file system.  For basic use cases, you can use a randomly generated UUID for the creation token.   The idempotent operation allows you to retry a CreateFileSystem call without risk of creating an extra file system. This can happen when an initial call fails in a way that leaves it uncertain whether or not a file system was actually created. An example might be that a transport level timeout occurred or your connection was reset. As long as you use the same creation token, if the initial call had succeeded in creating a file system, the client can learn of its existence from the FileSystemAlreadyExists error.  The CreateFileSystem call returns while the file system's lifecycle state is still creating. You can check the file system creation status by calling the DescribeFileSystems operation, which among other things returns the file system state.  This operation also takes an optional PerformanceMode parameter that you choose for your file system. We recommend generalPurpose performance mode for most file systems. File systems using the maxIO performance mode can scale to higher levels of aggregate throughput and operations per second with a tradeoff of slightly higher latencies for most file operations. The performance mode can't be changed after the file system has been created. For more information, see Amazon EFS: Performance Modes. After the file system is fully created, Amazon EFS sets its lifecycle state to available, at which point you can create one or more mount targets for the file system in your VPC. For more information, see CreateMountTarget. You mount your Amazon EFS file system on an EC2 instances in your VPC by using the mount target. For more information, see Amazon EFS: How it Works.   This operation requires permissions for the elasticfilesystem:CreateFileSystem action. 
   */
  createFileSystem(callback?: (err: AWSError, data: EFS.Types.FileSystemDescription) => void): Request<EFS.Types.FileSystemDescription, AWSError>;
  /**
   * Creates a mount target for a file system. You can then mount the file system on EC2 instances by using the mount target. You can create one mount target in each Availability Zone in your VPC. All EC2 instances in a VPC within a given Availability Zone share a single mount target for a given file system. If you have multiple subnets in an Availability Zone, you create a mount target in one of the subnets. EC2 instances do not need to be in the same subnet as the mount target in order to access their file system. For more information, see Amazon EFS: How it Works.  In the request, you also specify a file system ID for which you are creating the mount target and the file system's lifecycle state must be available. For more information, see DescribeFileSystems. In the request, you also provide a subnet ID, which determines the following:   VPC in which Amazon EFS creates the mount target   Availability Zone in which Amazon EFS creates the mount target   IP address range from which Amazon EFS selects the IP address of the mount target (if you don't specify an IP address in the request)   After creating the mount target, Amazon EFS returns a response that includes, a MountTargetId and an IpAddress. You use this IP address when mounting the file system in an EC2 instance. You can also use the mount target's DNS name when mounting the file system. The EC2 instance on which you mount the file system by using the mount target can resolve the mount target's DNS name to its IP address. For more information, see How it Works: Implementation Overview.  Note that you can create mount targets for a file system in only one VPC, and there can be only one mount target per Availability Zone. That is, if the file system already has one or more mount targets created for it, the subnet specified in the request to add another mount target must meet the following requirements:   Must belong to the same VPC as the subnets of the existing mount targets   Must not be in the same Availability Zone as any of the subnets of the existing mount targets   If the request satisfies the requirements, Amazon EFS does the following:   Creates a new mount target in the specified subnet.   Also creates a new network interface in the subnet as follows:   If the request provides an IpAddress, Amazon EFS assigns that IP address to the network interface. Otherwise, Amazon EFS assigns a free address in the subnet (in the same way that the Amazon EC2 CreateNetworkInterface call does when a request does not specify a primary private IP address).   If the request provides SecurityGroups, this network interface is associated with those security groups. Otherwise, it belongs to the default security group for the subnet's VPC.   Assigns the description Mount target fsmt-id for file system fs-id  where  fsmt-id  is the mount target ID, and  fs-id  is the FileSystemId.   Sets the requesterManaged property of the network interface to true, and the requesterId value to EFS.   Each Amazon EFS mount target has one corresponding requester-managed EC2 network interface. After the network interface is created, Amazon EFS sets the NetworkInterfaceId field in the mount target's description to the network interface ID, and the IpAddress field to its address. If network interface creation fails, the entire CreateMountTarget operation fails.    The CreateMountTarget call returns only after creating the network interface, but while the mount target state is still creating, you can check the mount target creation status by calling the DescribeMountTargets operation, which among other things returns the mount target state.  We recommend that you create a mount target in each of the Availability Zones. There are cost considerations for using a file system in an Availability Zone through a mount target created in another Availability Zone. For more information, see Amazon EFS. In addition, by always using a mount target local to the instance's Availability Zone, you eliminate a partial failure scenario. If the Availability Zone in which your mount target is created goes down, then you can't access your file system through that mount target.  This operation requires permissions for the following action on the file system:    elasticfilesystem:CreateMountTarget    This operation also requires permissions for the following Amazon EC2 actions:    ec2:DescribeSubnets     ec2:DescribeNetworkInterfaces     ec2:CreateNetworkInterface   
   */
  createMountTarget(params: EFS.Types.CreateMountTargetRequest, callback?: (err: AWSError, data: EFS.Types.MountTargetDescription) => void): Request<EFS.Types.MountTargetDescription, AWSError>;
  /**
   * Creates a mount target for a file system. You can then mount the file system on EC2 instances by using the mount target. You can create one mount target in each Availability Zone in your VPC. All EC2 instances in a VPC within a given Availability Zone share a single mount target for a given file system. If you have multiple subnets in an Availability Zone, you create a mount target in one of the subnets. EC2 instances do not need to be in the same subnet as the mount target in order to access their file system. For more information, see Amazon EFS: How it Works.  In the request, you also specify a file system ID for which you are creating the mount target and the file system's lifecycle state must be available. For more information, see DescribeFileSystems. In the request, you also provide a subnet ID, which determines the following:   VPC in which Amazon EFS creates the mount target   Availability Zone in which Amazon EFS creates the mount target   IP address range from which Amazon EFS selects the IP address of the mount target (if you don't specify an IP address in the request)   After creating the mount target, Amazon EFS returns a response that includes, a MountTargetId and an IpAddress. You use this IP address when mounting the file system in an EC2 instance. You can also use the mount target's DNS name when mounting the file system. The EC2 instance on which you mount the file system by using the mount target can resolve the mount target's DNS name to its IP address. For more information, see How it Works: Implementation Overview.  Note that you can create mount targets for a file system in only one VPC, and there can be only one mount target per Availability Zone. That is, if the file system already has one or more mount targets created for it, the subnet specified in the request to add another mount target must meet the following requirements:   Must belong to the same VPC as the subnets of the existing mount targets   Must not be in the same Availability Zone as any of the subnets of the existing mount targets   If the request satisfies the requirements, Amazon EFS does the following:   Creates a new mount target in the specified subnet.   Also creates a new network interface in the subnet as follows:   If the request provides an IpAddress, Amazon EFS assigns that IP address to the network interface. Otherwise, Amazon EFS assigns a free address in the subnet (in the same way that the Amazon EC2 CreateNetworkInterface call does when a request does not specify a primary private IP address).   If the request provides SecurityGroups, this network interface is associated with those security groups. Otherwise, it belongs to the default security group for the subnet's VPC.   Assigns the description Mount target fsmt-id for file system fs-id  where  fsmt-id  is the mount target ID, and  fs-id  is the FileSystemId.   Sets the requesterManaged property of the network interface to true, and the requesterId value to EFS.   Each Amazon EFS mount target has one corresponding requester-managed EC2 network interface. After the network interface is created, Amazon EFS sets the NetworkInterfaceId field in the mount target's description to the network interface ID, and the IpAddress field to its address. If network interface creation fails, the entire CreateMountTarget operation fails.    The CreateMountTarget call returns only after creating the network interface, but while the mount target state is still creating, you can check the mount target creation status by calling the DescribeMountTargets operation, which among other things returns the mount target state.  We recommend that you create a mount target in each of the Availability Zones. There are cost considerations for using a file system in an Availability Zone through a mount target created in another Availability Zone. For more information, see Amazon EFS. In addition, by always using a mount target local to the instance's Availability Zone, you eliminate a partial failure scenario. If the Availability Zone in which your mount target is created goes down, then you can't access your file system through that mount target.  This operation requires permissions for the following action on the file system:    elasticfilesystem:CreateMountTarget    This operation also requires permissions for the following Amazon EC2 actions:    ec2:DescribeSubnets     ec2:DescribeNetworkInterfaces     ec2:CreateNetworkInterface   
   */
  createMountTarget(callback?: (err: AWSError, data: EFS.Types.MountTargetDescription) => void): Request<EFS.Types.MountTargetDescription, AWSError>;
  /**
   * Creates or overwrites tags associated with a file system. Each tag is a key-value pair. If a tag key specified in the request already exists on the file system, this operation overwrites its value with the value provided in the request. If you add the Name tag to your file system, Amazon EFS returns it in the response to the DescribeFileSystems operation.  This operation requires permission for the elasticfilesystem:CreateTags action.
   */
  createTags(params: EFS.Types.CreateTagsRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates or overwrites tags associated with a file system. Each tag is a key-value pair. If a tag key specified in the request already exists on the file system, this operation overwrites its value with the value provided in the request. If you add the Name tag to your file system, Amazon EFS returns it in the response to the DescribeFileSystems operation.  This operation requires permission for the elasticfilesystem:CreateTags action.
   */
  createTags(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified access point. After deletion is complete, new clients can no longer connect to the access points. Clients connected to the access point at the time of deletion will continue to function until they terminate their connection. This operation requires permissions for the elasticfilesystem:DeleteAccessPoint action.
   */
  deleteAccessPoint(params: EFS.Types.DeleteAccessPointRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified access point. After deletion is complete, new clients can no longer connect to the access points. Clients connected to the access point at the time of deletion will continue to function until they terminate their connection. This operation requires permissions for the elasticfilesystem:DeleteAccessPoint action.
   */
  deleteAccessPoint(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a file system, permanently severing access to its contents. Upon return, the file system no longer exists and you can't access any contents of the deleted file system.  You can't delete a file system that is in use. That is, if the file system has any mount targets, you must first delete them. For more information, see DescribeMountTargets and DeleteMountTarget.   The DeleteFileSystem call returns while the file system state is still deleting. You can check the file system deletion status by calling the DescribeFileSystems operation, which returns a list of file systems in your account. If you pass file system ID or creation token for the deleted file system, the DescribeFileSystems returns a 404 FileSystemNotFound error.  This operation requires permissions for the elasticfilesystem:DeleteFileSystem action.
   */
  deleteFileSystem(params: EFS.Types.DeleteFileSystemRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a file system, permanently severing access to its contents. Upon return, the file system no longer exists and you can't access any contents of the deleted file system.  You can't delete a file system that is in use. That is, if the file system has any mount targets, you must first delete them. For more information, see DescribeMountTargets and DeleteMountTarget.   The DeleteFileSystem call returns while the file system state is still deleting. You can check the file system deletion status by calling the DescribeFileSystems operation, which returns a list of file systems in your account. If you pass file system ID or creation token for the deleted file system, the DescribeFileSystems returns a 404 FileSystemNotFound error.  This operation requires permissions for the elasticfilesystem:DeleteFileSystem action.
   */
  deleteFileSystem(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the FileSystemPolicy for the specified file system. The default FileSystemPolicy goes into effect once the existing policy is deleted. For more information about the default file system policy, see Using Resource-based Policies with EFS. This operation requires permissions for the elasticfilesystem:DeleteFileSystemPolicy action.
   */
  deleteFileSystemPolicy(params: EFS.Types.DeleteFileSystemPolicyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the FileSystemPolicy for the specified file system. The default FileSystemPolicy goes into effect once the existing policy is deleted. For more information about the default file system policy, see Using Resource-based Policies with EFS. This operation requires permissions for the elasticfilesystem:DeleteFileSystemPolicy action.
   */
  deleteFileSystemPolicy(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified mount target. This operation forcibly breaks any mounts of the file system by using the mount target that is being deleted, which might disrupt instances or applications using those mounts. To avoid applications getting cut off abruptly, you might consider unmounting any mounts of the mount target, if feasible. The operation also deletes the associated network interface. Uncommitted writes might be lost, but breaking a mount target using this operation does not corrupt the file system itself. The file system you created remains. You can mount an EC2 instance in your VPC by using another mount target. This operation requires permissions for the following action on the file system:    elasticfilesystem:DeleteMountTarget     The DeleteMountTarget call returns while the mount target state is still deleting. You can check the mount target deletion by calling the DescribeMountTargets operation, which returns a list of mount target descriptions for the given file system.   The operation also requires permissions for the following Amazon EC2 action on the mount target's network interface:    ec2:DeleteNetworkInterface   
   */
  deleteMountTarget(params: EFS.Types.DeleteMountTargetRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified mount target. This operation forcibly breaks any mounts of the file system by using the mount target that is being deleted, which might disrupt instances or applications using those mounts. To avoid applications getting cut off abruptly, you might consider unmounting any mounts of the mount target, if feasible. The operation also deletes the associated network interface. Uncommitted writes might be lost, but breaking a mount target using this operation does not corrupt the file system itself. The file system you created remains. You can mount an EC2 instance in your VPC by using another mount target. This operation requires permissions for the following action on the file system:    elasticfilesystem:DeleteMountTarget     The DeleteMountTarget call returns while the mount target state is still deleting. You can check the mount target deletion by calling the DescribeMountTargets operation, which returns a list of mount target descriptions for the given file system.   The operation also requires permissions for the following Amazon EC2 action on the mount target's network interface:    ec2:DeleteNetworkInterface   
   */
  deleteMountTarget(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified tags from a file system. If the DeleteTags request includes a tag key that doesn't exist, Amazon EFS ignores it and doesn't cause an error. For more information about tags and related restrictions, see Tag Restrictions in the AWS Billing and Cost Management User Guide. This operation requires permissions for the elasticfilesystem:DeleteTags action.
   */
  deleteTags(params: EFS.Types.DeleteTagsRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified tags from a file system. If the DeleteTags request includes a tag key that doesn't exist, Amazon EFS ignores it and doesn't cause an error. For more information about tags and related restrictions, see Tag Restrictions in the AWS Billing and Cost Management User Guide. This operation requires permissions for the elasticfilesystem:DeleteTags action.
   */
  deleteTags(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Returns the description of a specific Amazon EFS access point if the AccessPointId is provided. If you provide an EFS FileSystemId, it returns descriptions of all access points for that file system. You can provide either an AccessPointId or a FileSystemId in the request, but not both.  This operation requires permissions for the elasticfilesystem:DescribeAccessPoints action.
   */
  describeAccessPoints(params: EFS.Types.DescribeAccessPointsRequest, callback?: (err: AWSError, data: EFS.Types.DescribeAccessPointsResponse) => void): Request<EFS.Types.DescribeAccessPointsResponse, AWSError>;
  /**
   * Returns the description of a specific Amazon EFS access point if the AccessPointId is provided. If you provide an EFS FileSystemId, it returns descriptions of all access points for that file system. You can provide either an AccessPointId or a FileSystemId in the request, but not both.  This operation requires permissions for the elasticfilesystem:DescribeAccessPoints action.
   */
  describeAccessPoints(callback?: (err: AWSError, data: EFS.Types.DescribeAccessPointsResponse) => void): Request<EFS.Types.DescribeAccessPointsResponse, AWSError>;
  /**
   * Returns the FileSystemPolicy for the specified EFS file system. This operation requires permissions for the elasticfilesystem:DescribeFileSystemPolicy action.
   */
  describeFileSystemPolicy(params: EFS.Types.DescribeFileSystemPolicyRequest, callback?: (err: AWSError, data: EFS.Types.FileSystemPolicyDescription) => void): Request<EFS.Types.FileSystemPolicyDescription, AWSError>;
  /**
   * Returns the FileSystemPolicy for the specified EFS file system. This operation requires permissions for the elasticfilesystem:DescribeFileSystemPolicy action.
   */
  describeFileSystemPolicy(callback?: (err: AWSError, data: EFS.Types.FileSystemPolicyDescription) => void): Request<EFS.Types.FileSystemPolicyDescription, AWSError>;
  /**
   * Returns the description of a specific Amazon EFS file system if either the file system CreationToken or the FileSystemId is provided. Otherwise, it returns descriptions of all file systems owned by the caller's AWS account in the AWS Region of the endpoint that you're calling. When retrieving all file system descriptions, you can optionally specify the MaxItems parameter to limit the number of descriptions in a response. Currently, this number is automatically set to 10. If more file system descriptions remain, Amazon EFS returns a NextMarker, an opaque token, in the response. In this case, you should send a subsequent request with the Marker request parameter set to the value of NextMarker.  To retrieve a list of your file system descriptions, this operation is used in an iterative process, where DescribeFileSystems is called first without the Marker and then the operation continues to call it with the Marker parameter set to the value of the NextMarker from the previous response until the response has no NextMarker.   The order of file systems returned in the response of one DescribeFileSystems call and the order of file systems returned across the responses of a multi-call iteration is unspecified.   This operation requires permissions for the elasticfilesystem:DescribeFileSystems action. 
   */
  describeFileSystems(params: EFS.Types.DescribeFileSystemsRequest, callback?: (err: AWSError, data: EFS.Types.DescribeFileSystemsResponse) => void): Request<EFS.Types.DescribeFileSystemsResponse, AWSError>;
  /**
   * Returns the description of a specific Amazon EFS file system if either the file system CreationToken or the FileSystemId is provided. Otherwise, it returns descriptions of all file systems owned by the caller's AWS account in the AWS Region of the endpoint that you're calling. When retrieving all file system descriptions, you can optionally specify the MaxItems parameter to limit the number of descriptions in a response. Currently, this number is automatically set to 10. If more file system descriptions remain, Amazon EFS returns a NextMarker, an opaque token, in the response. In this case, you should send a subsequent request with the Marker request parameter set to the value of NextMarker.  To retrieve a list of your file system descriptions, this operation is used in an iterative process, where DescribeFileSystems is called first without the Marker and then the operation continues to call it with the Marker parameter set to the value of the NextMarker from the previous response until the response has no NextMarker.   The order of file systems returned in the response of one DescribeFileSystems call and the order of file systems returned across the responses of a multi-call iteration is unspecified.   This operation requires permissions for the elasticfilesystem:DescribeFileSystems action. 
   */
  describeFileSystems(callback?: (err: AWSError, data: EFS.Types.DescribeFileSystemsResponse) => void): Request<EFS.Types.DescribeFileSystemsResponse, AWSError>;
  /**
   * Returns the current LifecycleConfiguration object for the specified Amazon EFS file system. EFS lifecycle management uses the LifecycleConfiguration object to identify which files to move to the EFS Infrequent Access (IA) storage class. For a file system without a LifecycleConfiguration object, the call returns an empty array in the response. This operation requires permissions for the elasticfilesystem:DescribeLifecycleConfiguration operation.
   */
  describeLifecycleConfiguration(params: EFS.Types.DescribeLifecycleConfigurationRequest, callback?: (err: AWSError, data: EFS.Types.LifecycleConfigurationDescription) => void): Request<EFS.Types.LifecycleConfigurationDescription, AWSError>;
  /**
   * Returns the current LifecycleConfiguration object for the specified Amazon EFS file system. EFS lifecycle management uses the LifecycleConfiguration object to identify which files to move to the EFS Infrequent Access (IA) storage class. For a file system without a LifecycleConfiguration object, the call returns an empty array in the response. This operation requires permissions for the elasticfilesystem:DescribeLifecycleConfiguration operation.
   */
  describeLifecycleConfiguration(callback?: (err: AWSError, data: EFS.Types.LifecycleConfigurationDescription) => void): Request<EFS.Types.LifecycleConfigurationDescription, AWSError>;
  /**
   * Returns the security groups currently in effect for a mount target. This operation requires that the network interface of the mount target has been created and the lifecycle state of the mount target is not deleted. This operation requires permissions for the following actions:    elasticfilesystem:DescribeMountTargetSecurityGroups action on the mount target's file system.     ec2:DescribeNetworkInterfaceAttribute action on the mount target's network interface.   
   */
  describeMountTargetSecurityGroups(params: EFS.Types.DescribeMountTargetSecurityGroupsRequest, callback?: (err: AWSError, data: EFS.Types.DescribeMountTargetSecurityGroupsResponse) => void): Request<EFS.Types.DescribeMountTargetSecurityGroupsResponse, AWSError>;
  /**
   * Returns the security groups currently in effect for a mount target. This operation requires that the network interface of the mount target has been created and the lifecycle state of the mount target is not deleted. This operation requires permissions for the following actions:    elasticfilesystem:DescribeMountTargetSecurityGroups action on the mount target's file system.     ec2:DescribeNetworkInterfaceAttribute action on the mount target's network interface.   
   */
  describeMountTargetSecurityGroups(callback?: (err: AWSError, data: EFS.Types.DescribeMountTargetSecurityGroupsResponse) => void): Request<EFS.Types.DescribeMountTargetSecurityGroupsResponse, AWSError>;
  /**
   * Returns the descriptions of all the current mount targets, or a specific mount target, for a file system. When requesting all of the current mount targets, the order of mount targets returned in the response is unspecified. This operation requires permissions for the elasticfilesystem:DescribeMountTargets action, on either the file system ID that you specify in FileSystemId, or on the file system of the mount target that you specify in MountTargetId.
   */
  describeMountTargets(params: EFS.Types.DescribeMountTargetsRequest, callback?: (err: AWSError, data: EFS.Types.DescribeMountTargetsResponse) => void): Request<EFS.Types.DescribeMountTargetsResponse, AWSError>;
  /**
   * Returns the descriptions of all the current mount targets, or a specific mount target, for a file system. When requesting all of the current mount targets, the order of mount targets returned in the response is unspecified. This operation requires permissions for the elasticfilesystem:DescribeMountTargets action, on either the file system ID that you specify in FileSystemId, or on the file system of the mount target that you specify in MountTargetId.
   */
  describeMountTargets(callback?: (err: AWSError, data: EFS.Types.DescribeMountTargetsResponse) => void): Request<EFS.Types.DescribeMountTargetsResponse, AWSError>;
  /**
   * Returns the tags associated with a file system. The order of tags returned in the response of one DescribeTags call and the order of tags returned across the responses of a multiple-call iteration (when using pagination) is unspecified.   This operation requires permissions for the elasticfilesystem:DescribeTags action. 
   */
  describeTags(params: EFS.Types.DescribeTagsRequest, callback?: (err: AWSError, data: EFS.Types.DescribeTagsResponse) => void): Request<EFS.Types.DescribeTagsResponse, AWSError>;
  /**
   * Returns the tags associated with a file system. The order of tags returned in the response of one DescribeTags call and the order of tags returned across the responses of a multiple-call iteration (when using pagination) is unspecified.   This operation requires permissions for the elasticfilesystem:DescribeTags action. 
   */
  describeTags(callback?: (err: AWSError, data: EFS.Types.DescribeTagsResponse) => void): Request<EFS.Types.DescribeTagsResponse, AWSError>;
  /**
   * Lists all tags for a top-level EFS resource. You must provide the ID of the resource that you want to retrieve the tags for. This operation requires permissions for the elasticfilesystem:DescribeAccessPoints action.
   */
  listTagsForResource(params: EFS.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: EFS.Types.ListTagsForResourceResponse) => void): Request<EFS.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Lists all tags for a top-level EFS resource. You must provide the ID of the resource that you want to retrieve the tags for. This operation requires permissions for the elasticfilesystem:DescribeAccessPoints action.
   */
  listTagsForResource(callback?: (err: AWSError, data: EFS.Types.ListTagsForResourceResponse) => void): Request<EFS.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Modifies the set of security groups in effect for a mount target. When you create a mount target, Amazon EFS also creates a new network interface. For more information, see CreateMountTarget. This operation replaces the security groups in effect for the network interface associated with a mount target, with the SecurityGroups provided in the request. This operation requires that the network interface of the mount target has been created and the lifecycle state of the mount target is not deleted.  The operation requires permissions for the following actions:    elasticfilesystem:ModifyMountTargetSecurityGroups action on the mount target's file system.     ec2:ModifyNetworkInterfaceAttribute action on the mount target's network interface.   
   */
  modifyMountTargetSecurityGroups(params: EFS.Types.ModifyMountTargetSecurityGroupsRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Modifies the set of security groups in effect for a mount target. When you create a mount target, Amazon EFS also creates a new network interface. For more information, see CreateMountTarget. This operation replaces the security groups in effect for the network interface associated with a mount target, with the SecurityGroups provided in the request. This operation requires that the network interface of the mount target has been created and the lifecycle state of the mount target is not deleted.  The operation requires permissions for the following actions:    elasticfilesystem:ModifyMountTargetSecurityGroups action on the mount target's file system.     ec2:ModifyNetworkInterfaceAttribute action on the mount target's network interface.   
   */
  modifyMountTargetSecurityGroups(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Applies an Amazon EFS FileSystemPolicy to an Amazon EFS file system. A file system policy is an IAM resource-based policy and can contain multiple policy statements. A file system always has exactly one file system policy, which can be the default policy or an explicit policy set or updated using this API operation. When an explicit policy is set, it overrides the default policy. For more information about the default file system policy, see Default EFS File System Policy.  This operation requires permissions for the elasticfilesystem:PutFileSystemPolicy action.
   */
  putFileSystemPolicy(params: EFS.Types.PutFileSystemPolicyRequest, callback?: (err: AWSError, data: EFS.Types.FileSystemPolicyDescription) => void): Request<EFS.Types.FileSystemPolicyDescription, AWSError>;
  /**
   * Applies an Amazon EFS FileSystemPolicy to an Amazon EFS file system. A file system policy is an IAM resource-based policy and can contain multiple policy statements. A file system always has exactly one file system policy, which can be the default policy or an explicit policy set or updated using this API operation. When an explicit policy is set, it overrides the default policy. For more information about the default file system policy, see Default EFS File System Policy.  This operation requires permissions for the elasticfilesystem:PutFileSystemPolicy action.
   */
  putFileSystemPolicy(callback?: (err: AWSError, data: EFS.Types.FileSystemPolicyDescription) => void): Request<EFS.Types.FileSystemPolicyDescription, AWSError>;
  /**
   * Enables lifecycle management by creating a new LifecycleConfiguration object. A LifecycleConfiguration object defines when files in an Amazon EFS file system are automatically transitioned to the lower-cost EFS Infrequent Access (IA) storage class. A LifecycleConfiguration applies to all files in a file system. Each Amazon EFS file system supports one lifecycle configuration, which applies to all files in the file system. If a LifecycleConfiguration object already exists for the specified file system, a PutLifecycleConfiguration call modifies the existing configuration. A PutLifecycleConfiguration call with an empty LifecyclePolicies array in the request body deletes any existing LifecycleConfiguration and disables lifecycle management. In the request, specify the following:    The ID for the file system for which you are enabling, disabling, or modifying lifecycle management.   A LifecyclePolicies array of LifecyclePolicy objects that define when files are moved to the IA storage class. The array can contain only one LifecyclePolicy item.   This operation requires permissions for the elasticfilesystem:PutLifecycleConfiguration operation. To apply a LifecycleConfiguration object to an encrypted file system, you need the same AWS Key Management Service (AWS KMS) permissions as when you created the encrypted file system. 
   */
  putLifecycleConfiguration(params: EFS.Types.PutLifecycleConfigurationRequest, callback?: (err: AWSError, data: EFS.Types.LifecycleConfigurationDescription) => void): Request<EFS.Types.LifecycleConfigurationDescription, AWSError>;
  /**
   * Enables lifecycle management by creating a new LifecycleConfiguration object. A LifecycleConfiguration object defines when files in an Amazon EFS file system are automatically transitioned to the lower-cost EFS Infrequent Access (IA) storage class. A LifecycleConfiguration applies to all files in a file system. Each Amazon EFS file system supports one lifecycle configuration, which applies to all files in the file system. If a LifecycleConfiguration object already exists for the specified file system, a PutLifecycleConfiguration call modifies the existing configuration. A PutLifecycleConfiguration call with an empty LifecyclePolicies array in the request body deletes any existing LifecycleConfiguration and disables lifecycle management. In the request, specify the following:    The ID for the file system for which you are enabling, disabling, or modifying lifecycle management.   A LifecyclePolicies array of LifecyclePolicy objects that define when files are moved to the IA storage class. The array can contain only one LifecyclePolicy item.   This operation requires permissions for the elasticfilesystem:PutLifecycleConfiguration operation. To apply a LifecycleConfiguration object to an encrypted file system, you need the same AWS Key Management Service (AWS KMS) permissions as when you created the encrypted file system. 
   */
  putLifecycleConfiguration(callback?: (err: AWSError, data: EFS.Types.LifecycleConfigurationDescription) => void): Request<EFS.Types.LifecycleConfigurationDescription, AWSError>;
  /**
   * Creates a tag for an EFS resource. You can create tags for EFS file systems and access points using this API operation. This operation requires permissions for the elasticfilesystem:TagResource action.
   */
  tagResource(params: EFS.Types.TagResourceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates a tag for an EFS resource. You can create tags for EFS file systems and access points using this API operation. This operation requires permissions for the elasticfilesystem:TagResource action.
   */
  tagResource(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes tags from an EFS resource. You can remove tags from EFS file systems and access points using this API operation. This operation requires permissions for the elasticfilesystem:UntagResource action.
   */
  untagResource(params: EFS.Types.UntagResourceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes tags from an EFS resource. You can remove tags from EFS file systems and access points using this API operation. This operation requires permissions for the elasticfilesystem:UntagResource action.
   */
  untagResource(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the throughput mode or the amount of provisioned throughput of an existing file system.
   */
  updateFileSystem(params: EFS.Types.UpdateFileSystemRequest, callback?: (err: AWSError, data: EFS.Types.FileSystemDescription) => void): Request<EFS.Types.FileSystemDescription, AWSError>;
  /**
   * Updates the throughput mode or the amount of provisioned throughput of an existing file system.
   */
  updateFileSystem(callback?: (err: AWSError, data: EFS.Types.FileSystemDescription) => void): Request<EFS.Types.FileSystemDescription, AWSError>;
}
declare namespace EFS {
  export type AccessPointArn = string;
  export interface AccessPointDescription {
    /**
     * The opaque string specified in the request to ensure idempotent creation.
     */
    ClientToken?: ClientToken;
    /**
     * The name of the access point. This is the value of the Name tag.
     */
    Name?: Name;
    /**
     * The tags associated with the access point, presented as an array of Tag objects.
     */
    Tags?: Tags;
    /**
     * The ID of the access point, assigned by Amazon EFS.
     */
    AccessPointId?: AccessPointId;
    /**
     * The unique Amazon Resource Name (ARN) associated with the access point.
     */
    AccessPointArn?: AccessPointArn;
    /**
     * The ID of the EFS file system that the access point applies to.
     */
    FileSystemId?: FileSystemId;
    /**
     * The full POSIX identity, including the user ID, group ID, and secondary group IDs on the access point that is used for all file operations by NFS clients using the access point.
     */
    PosixUser?: PosixUser;
    /**
     * The directory on the Amazon EFS file system that the access point exposes as the root directory to NFS clients using the access point.
     */
    RootDirectory?: RootDirectory;
    /**
     * Identified the AWS account that owns the access point resource.
     */
    OwnerId?: AwsAccountId;
    /**
     * Identifies the lifecycle phase of the access point.
     */
    LifeCycleState?: LifeCycleState;
  }
  export type AccessPointDescriptions = AccessPointDescription[];
  export type AccessPointId = string;
  export type AvailabilityZoneId = string;
  export type AvailabilityZoneName = string;
  export type AwsAccountId = string;
  export type BypassPolicyLockoutSafetyCheck = boolean;
  export type ClientToken = string;
  export interface CreateAccessPointRequest {
    /**
     * A string of up to 64 ASCII characters that Amazon EFS uses to ensure idempotent creation.
     */
    ClientToken: ClientToken;
    /**
     * Creates tags associated with the access point. Each tag is a key-value pair.
     */
    Tags?: Tags;
    /**
     * The ID of the EFS file system that the access point provides access to.
     */
    FileSystemId: FileSystemId;
    /**
     * The operating system user and group applied to all file system requests made using the access point.
     */
    PosixUser?: PosixUser;
    /**
     * Specifies the directory on the Amazon EFS file system that the access point exposes as the root directory of your file system to NFS clients using the access point. The clients using the access point can only access the root directory and below. If the RootDirectory &gt; Path specified does not exist, EFS creates it and applies the CreationInfo settings when a client connects to an access point. When specifying a RootDirectory, you need to provide the Path, and the CreationInfo is optional.
     */
    RootDirectory?: RootDirectory;
  }
  export interface CreateFileSystemRequest {
    /**
     * A string of up to 64 ASCII characters. Amazon EFS uses this to ensure idempotent creation.
     */
    CreationToken: CreationToken;
    /**
     * The performance mode of the file system. We recommend generalPurpose performance mode for most file systems. File systems using the maxIO performance mode can scale to higher levels of aggregate throughput and operations per second with a tradeoff of slightly higher latencies for most file operations. The performance mode can't be changed after the file system has been created.
     */
    PerformanceMode?: PerformanceMode;
    /**
     * A Boolean value that, if true, creates an encrypted file system. When creating an encrypted file system, you have the option of specifying CreateFileSystemRequest$KmsKeyId for an existing AWS Key Management Service (AWS KMS) customer master key (CMK). If you don't specify a CMK, then the default CMK for Amazon EFS, /aws/elasticfilesystem, is used to protect the encrypted file system. 
     */
    Encrypted?: Encrypted;
    /**
     * The ID of the AWS KMS CMK to be used to protect the encrypted file system. This parameter is only required if you want to use a nondefault CMK. If this parameter is not specified, the default CMK for Amazon EFS is used. This ID can be in one of the following formats:   Key ID - A unique identifier of the key, for example 1234abcd-12ab-34cd-56ef-1234567890ab.   ARN - An Amazon Resource Name (ARN) for the key, for example arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab.   Key alias - A previously created display name for a key, for example alias/projectKey1.   Key alias ARN - An ARN for a key alias, for example arn:aws:kms:us-west-2:444455556666:alias/projectKey1.   If KmsKeyId is specified, the CreateFileSystemRequest$Encrypted parameter must be set to true.  EFS accepts only symmetric CMKs. You cannot use asymmetric CMKs with EFS file systems. 
     */
    KmsKeyId?: KmsKeyId;
    /**
     * The throughput mode for the file system to be created. There are two throughput modes to choose from for your file system: bursting and provisioned. If you set ThroughputMode to provisioned, you must also set a value for ProvisionedThroughPutInMibps. You can decrease your file system's throughput in Provisioned Throughput mode or change between the throughput modes as long as it’s been more than 24 hours since the last decrease or throughput mode change. For more, see Specifying Throughput with Provisioned Mode in the Amazon EFS User Guide. 
     */
    ThroughputMode?: ThroughputMode;
    /**
     * The throughput, measured in MiB/s, that you want to provision for a file system that you're creating. Valid values are 1-1024. Required if ThroughputMode is set to provisioned. The upper limit for throughput is 1024 MiB/s. You can get this limit increased by contacting AWS Support. For more information, see Amazon EFS Limits That You Can Increase in the Amazon EFS User Guide. 
     */
    ProvisionedThroughputInMibps?: ProvisionedThroughputInMibps;
    /**
     * A value that specifies to create one or more tags associated with the file system. Each tag is a user-defined key-value pair. Name your file system on creation by including a "Key":"Name","Value":"{value}" key-value pair.
     */
    Tags?: Tags;
  }
  export interface CreateMountTargetRequest {
    /**
     * The ID of the file system for which to create the mount target.
     */
    FileSystemId: FileSystemId;
    /**
     * The ID of the subnet to add the mount target in.
     */
    SubnetId: SubnetId;
    /**
     * Valid IPv4 address within the address range of the specified subnet.
     */
    IpAddress?: IpAddress;
    /**
     * Up to five VPC security group IDs, of the form sg-xxxxxxxx. These must be for the same VPC as subnet specified.
     */
    SecurityGroups?: SecurityGroups;
  }
  export interface CreateTagsRequest {
    /**
     * The ID of the file system whose tags you want to modify (String). This operation modifies the tags only, not the file system.
     */
    FileSystemId: FileSystemId;
    /**
     * An array of Tag objects to add. Each Tag object is a key-value pair. 
     */
    Tags: Tags;
  }
  export interface CreationInfo {
    /**
     * Specifies the POSIX user ID to apply to the RootDirectory. Accepts values from 0 to 2^32 (4294967295).
     */
    OwnerUid: OwnerUid;
    /**
     * Specifies the POSIX group ID to apply to the RootDirectory. Accepts values from 0 to 2^32 (4294967295).
     */
    OwnerGid: OwnerGid;
    /**
     * Specifies the POSIX permissions to apply to the RootDirectory, in the format of an octal number representing the file's mode bits.
     */
    Permissions: Permissions;
  }
  export type CreationToken = string;
  export interface DeleteAccessPointRequest {
    /**
     * The ID of the access point that you want to delete.
     */
    AccessPointId: AccessPointId;
  }
  export interface DeleteFileSystemPolicyRequest {
    /**
     * Specifies the EFS file system for which to delete the FileSystemPolicy.
     */
    FileSystemId: FileSystemId;
  }
  export interface DeleteFileSystemRequest {
    /**
     * The ID of the file system you want to delete.
     */
    FileSystemId: FileSystemId;
  }
  export interface DeleteMountTargetRequest {
    /**
     * The ID of the mount target to delete (String).
     */
    MountTargetId: MountTargetId;
  }
  export interface DeleteTagsRequest {
    /**
     * The ID of the file system whose tags you want to delete (String).
     */
    FileSystemId: FileSystemId;
    /**
     * A list of tag keys to delete.
     */
    TagKeys: TagKeys;
  }
  export interface DescribeAccessPointsRequest {
    /**
     * (Optional) When retrieving all access points for a file system, you can optionally specify the MaxItems parameter to limit the number of objects returned in a response. The default value is 100. 
     */
    MaxResults?: MaxResults;
    /**
     *  NextToken is present if the response is paginated. You can use NextMarker in the subsequent request to fetch the next page of access point descriptions.
     */
    NextToken?: Token;
    /**
     * (Optional) Specifies an EFS access point to describe in the response; mutually exclusive with FileSystemId.
     */
    AccessPointId?: AccessPointId;
    /**
     * (Optional) If you provide a FileSystemId, EFS returns all access points for that file system; mutually exclusive with AccessPointId.
     */
    FileSystemId?: FileSystemId;
  }
  export interface DescribeAccessPointsResponse {
    /**
     * An array of access point descriptions.
     */
    AccessPoints?: AccessPointDescriptions;
    /**
     * Present if there are more access points than returned in the response. You can use the NextMarker in the subsequent request to fetch the additional descriptions.
     */
    NextToken?: Token;
  }
  export interface DescribeFileSystemPolicyRequest {
    /**
     * Specifies which EFS file system to retrieve the FileSystemPolicy for.
     */
    FileSystemId: FileSystemId;
  }
  export interface DescribeFileSystemsRequest {
    /**
     * (Optional) Specifies the maximum number of file systems to return in the response (integer). This number is automatically set to 100. The response is paginated at 100 per page if you have more than 100 file systems. 
     */
    MaxItems?: MaxItems;
    /**
     * (Optional) Opaque pagination token returned from a previous DescribeFileSystems operation (String). If present, specifies to continue the list from where the returning call had left off. 
     */
    Marker?: Marker;
    /**
     * (Optional) Restricts the list to the file system with this creation token (String). You specify a creation token when you create an Amazon EFS file system.
     */
    CreationToken?: CreationToken;
    /**
     * (Optional) ID of the file system whose description you want to retrieve (String).
     */
    FileSystemId?: FileSystemId;
  }
  export interface DescribeFileSystemsResponse {
    /**
     * Present if provided by caller in the request (String).
     */
    Marker?: Marker;
    /**
     * An array of file system descriptions.
     */
    FileSystems?: FileSystemDescriptions;
    /**
     * Present if there are more file systems than returned in the response (String). You can use the NextMarker in the subsequent request to fetch the descriptions.
     */
    NextMarker?: Marker;
  }
  export interface DescribeLifecycleConfigurationRequest {
    /**
     * The ID of the file system whose LifecycleConfiguration object you want to retrieve (String).
     */
    FileSystemId: FileSystemId;
  }
  export interface DescribeMountTargetSecurityGroupsRequest {
    /**
     * The ID of the mount target whose security groups you want to retrieve.
     */
    MountTargetId: MountTargetId;
  }
  export interface DescribeMountTargetSecurityGroupsResponse {
    /**
     * An array of security groups.
     */
    SecurityGroups: SecurityGroups;
  }
  export interface DescribeMountTargetsRequest {
    /**
     * (Optional) Maximum number of mount targets to return in the response. Currently, this number is automatically set to 10, and other values are ignored. The response is paginated at 100 per page if you have more than 100 mount targets.
     */
    MaxItems?: MaxItems;
    /**
     * (Optional) Opaque pagination token returned from a previous DescribeMountTargets operation (String). If present, it specifies to continue the list from where the previous returning call left off.
     */
    Marker?: Marker;
    /**
     * (Optional) ID of the file system whose mount targets you want to list (String). It must be included in your request if an AccessPointId or MountTargetId is not included. Accepts either a file system ID or ARN as input.
     */
    FileSystemId?: FileSystemId;
    /**
     * (Optional) ID of the mount target that you want to have described (String). It must be included in your request if FileSystemId is not included. Accepts either a mount target ID or ARN as input.
     */
    MountTargetId?: MountTargetId;
    /**
     * (Optional) The ID of the access point whose mount targets that you want to list. It must be included in your request if a FileSystemId or MountTargetId is not included in your request. Accepts either an access point ID or ARN as input.
     */
    AccessPointId?: AccessPointId;
  }
  export interface DescribeMountTargetsResponse {
    /**
     * If the request included the Marker, the response returns that value in this field.
     */
    Marker?: Marker;
    /**
     * Returns the file system's mount targets as an array of MountTargetDescription objects.
     */
    MountTargets?: MountTargetDescriptions;
    /**
     * If a value is present, there are more mount targets to return. In a subsequent request, you can provide Marker in your request with this value to retrieve the next set of mount targets.
     */
    NextMarker?: Marker;
  }
  export interface DescribeTagsRequest {
    /**
     * (Optional) The maximum number of file system tags to return in the response. Currently, this number is automatically set to 100, and other values are ignored. The response is paginated at 100 per page if you have more than 100 tags.
     */
    MaxItems?: MaxItems;
    /**
     * (Optional) An opaque pagination token returned from a previous DescribeTags operation (String). If present, it specifies to continue the list from where the previous call left off.
     */
    Marker?: Marker;
    /**
     * The ID of the file system whose tag set you want to retrieve.
     */
    FileSystemId: FileSystemId;
  }
  export interface DescribeTagsResponse {
    /**
     * If the request included a Marker, the response returns that value in this field.
     */
    Marker?: Marker;
    /**
     * Returns tags associated with the file system as an array of Tag objects. 
     */
    Tags: Tags;
    /**
     * If a value is present, there are more tags to return. In a subsequent request, you can provide the value of NextMarker as the value of the Marker parameter in your next request to retrieve the next set of tags.
     */
    NextMarker?: Marker;
  }
  export type Encrypted = boolean;
  export interface FileSystemDescription {
    /**
     * The AWS account that created the file system. If the file system was created by an IAM user, the parent account to which the user belongs is the owner.
     */
    OwnerId: AwsAccountId;
    /**
     * The opaque string specified in the request.
     */
    CreationToken: CreationToken;
    /**
     * The ID of the file system, assigned by Amazon EFS.
     */
    FileSystemId: FileSystemId;
    /**
     * The time that the file system was created, in seconds (since 1970-01-01T00:00:00Z).
     */
    CreationTime: Timestamp;
    /**
     * The lifecycle phase of the file system.
     */
    LifeCycleState: LifeCycleState;
    /**
     * You can add tags to a file system, including a Name tag. For more information, see CreateFileSystem. If the file system has a Name tag, Amazon EFS returns the value in this field. 
     */
    Name?: TagValue;
    /**
     * The current number of mount targets that the file system has. For more information, see CreateMountTarget.
     */
    NumberOfMountTargets: MountTargetCount;
    /**
     * The latest known metered size (in bytes) of data stored in the file system, in its Value field, and the time at which that size was determined in its Timestamp field. The Timestamp value is the integer number of seconds since 1970-01-01T00:00:00Z. The SizeInBytes value doesn't represent the size of a consistent snapshot of the file system, but it is eventually consistent when there are no writes to the file system. That is, SizeInBytes represents actual size only if the file system is not modified for a period longer than a couple of hours. Otherwise, the value is not the exact size that the file system was at any point in time. 
     */
    SizeInBytes: FileSystemSize;
    /**
     * The performance mode of the file system.
     */
    PerformanceMode: PerformanceMode;
    /**
     * A Boolean value that, if true, indicates that the file system is encrypted.
     */
    Encrypted?: Encrypted;
    /**
     * The ID of an AWS Key Management Service (AWS KMS) customer master key (CMK) that was used to protect the encrypted file system.
     */
    KmsKeyId?: KmsKeyId;
    /**
     * The throughput mode for a file system. There are two throughput modes to choose from for your file system: bursting and provisioned. If you set ThroughputMode to provisioned, you must also set a value for ProvisionedThroughPutInMibps. You can decrease your file system's throughput in Provisioned Throughput mode or change between the throughput modes as long as it’s been more than 24 hours since the last decrease or throughput mode change. 
     */
    ThroughputMode?: ThroughputMode;
    /**
     * The throughput, measured in MiB/s, that you want to provision for a file system. Valid values are 1-1024. Required if ThroughputMode is set to provisioned. The limit on throughput is 1024 MiB/s. You can get these limits increased by contacting AWS Support. For more information, see Amazon EFS Limits That You Can Increase in the Amazon EFS User Guide. 
     */
    ProvisionedThroughputInMibps?: ProvisionedThroughputInMibps;
    /**
     * The tags associated with the file system, presented as an array of Tag objects.
     */
    Tags: Tags;
  }
  export type FileSystemDescriptions = FileSystemDescription[];
  export type FileSystemId = string;
  export type FileSystemNullableSizeValue = number;
  export interface FileSystemPolicyDescription {
    /**
     * Specifies the EFS file system to which the FileSystemPolicy applies.
     */
    FileSystemId?: FileSystemId;
    /**
     * The JSON formatted FileSystemPolicy for the EFS file system.
     */
    Policy?: Policy;
  }
  export interface FileSystemSize {
    /**
     * The latest known metered size (in bytes) of data stored in the file system.
     */
    Value: FileSystemSizeValue;
    /**
     * The time at which the size of data, returned in the Value field, was determined. The value is the integer number of seconds since 1970-01-01T00:00:00Z.
     */
    Timestamp?: Timestamp;
    /**
     * The latest known metered size (in bytes) of data stored in the Infrequent Access storage class.
     */
    ValueInIA?: FileSystemNullableSizeValue;
    /**
     * The latest known metered size (in bytes) of data stored in the Standard storage class.
     */
    ValueInStandard?: FileSystemNullableSizeValue;
  }
  export type FileSystemSizeValue = number;
  export type Gid = number;
  export type IpAddress = string;
  export type KmsKeyId = string;
  export type LifeCycleState = "creating"|"available"|"updating"|"deleting"|"deleted"|string;
  export interface LifecycleConfigurationDescription {
    /**
     * An array of lifecycle management policies. Currently, EFS supports a maximum of one policy per file system.
     */
    LifecyclePolicies?: LifecyclePolicies;
  }
  export type LifecyclePolicies = LifecyclePolicy[];
  export interface LifecyclePolicy {
    /**
     *  A value that describes the period of time that a file is not accessed, after which it transitions to the IA storage class. Metadata operations such as listing the contents of a directory don't count as file access events.
     */
    TransitionToIA?: TransitionToIARules;
  }
  export interface ListTagsForResourceRequest {
    /**
     * Specifies the EFS resource you want to retrieve tags for. You can retrieve tags for EFS file systems and access points using this API endpoint.
     */
    ResourceId: ResourceId;
    /**
     * (Optional) Specifies the maximum number of tag objects to return in the response. The default value is 100.
     */
    MaxResults?: MaxResults;
    /**
     * You can use NextToken in a subsequent request to fetch the next page of access point descriptions if the response payload was paginated.
     */
    NextToken?: Token;
  }
  export interface ListTagsForResourceResponse {
    /**
     * An array of the tags for the specified EFS resource.
     */
    Tags?: Tags;
    /**
     *  NextToken is present if the response payload is paginated. You can use NextToken in a subsequent request to fetch the next page of access point descriptions.
     */
    NextToken?: Token;
  }
  export type Marker = string;
  export type MaxItems = number;
  export type MaxResults = number;
  export interface ModifyMountTargetSecurityGroupsRequest {
    /**
     * The ID of the mount target whose security groups you want to modify.
     */
    MountTargetId: MountTargetId;
    /**
     * An array of up to five VPC security group IDs.
     */
    SecurityGroups?: SecurityGroups;
  }
  export type MountTargetCount = number;
  export interface MountTargetDescription {
    /**
     * AWS account ID that owns the resource.
     */
    OwnerId?: AwsAccountId;
    /**
     * System-assigned mount target ID.
     */
    MountTargetId: MountTargetId;
    /**
     * The ID of the file system for which the mount target is intended.
     */
    FileSystemId: FileSystemId;
    /**
     * The ID of the mount target's subnet.
     */
    SubnetId: SubnetId;
    /**
     * Lifecycle state of the mount target.
     */
    LifeCycleState: LifeCycleState;
    /**
     * Address at which the file system can be mounted by using the mount target.
     */
    IpAddress?: IpAddress;
    /**
     * The ID of the network interface that Amazon EFS created when it created the mount target.
     */
    NetworkInterfaceId?: NetworkInterfaceId;
    /**
     * The unique and consistent identifier of the Availability Zone (AZ) that the mount target resides in. For example, use1-az1 is an AZ ID for the us-east-1 Region and it has the same location in every AWS account.
     */
    AvailabilityZoneId?: AvailabilityZoneId;
    /**
     * The name of the Availability Zone (AZ) that the mount target resides in. AZs are independently mapped to names for each AWS account. For example, the Availability Zone us-east-1a for your AWS account might not be the same location as us-east-1a for another AWS account.
     */
    AvailabilityZoneName?: AvailabilityZoneName;
  }
  export type MountTargetDescriptions = MountTargetDescription[];
  export type MountTargetId = string;
  export type Name = string;
  export type NetworkInterfaceId = string;
  export type OwnerGid = number;
  export type OwnerUid = number;
  export type Path = string;
  export type PerformanceMode = "generalPurpose"|"maxIO"|string;
  export type Permissions = string;
  export type Policy = string;
  export interface PosixUser {
    /**
     * The POSIX user ID used for all file system operations using this access point.
     */
    Uid: Uid;
    /**
     * The POSIX group ID used for all file system operations using this access point.
     */
    Gid: Gid;
    /**
     * Secondary POSIX group IDs used for all file system operations using this access point.
     */
    SecondaryGids?: SecondaryGids;
  }
  export type ProvisionedThroughputInMibps = number;
  export interface PutFileSystemPolicyRequest {
    /**
     * The ID of the EFS file system that you want to create or update the FileSystemPolicy for.
     */
    FileSystemId: FileSystemId;
    /**
     * The FileSystemPolicy that you're creating. Accepts a JSON formatted policy definition. To find out more about the elements that make up a file system policy, see EFS Resource-based Policies. 
     */
    Policy: Policy;
    /**
     * (Optional) A flag to indicate whether to bypass the FileSystemPolicy lockout safety check. The policy lockout safety check determines whether the policy in the request will prevent the principal making the request will be locked out from making future PutFileSystemPolicy requests on the file system. Set BypassPolicyLockoutSafetyCheck to True only when you intend to prevent the principal that is making the request from making a subsequent PutFileSystemPolicy request on the file system. The default value is False. 
     */
    BypassPolicyLockoutSafetyCheck?: BypassPolicyLockoutSafetyCheck;
  }
  export interface PutLifecycleConfigurationRequest {
    /**
     * The ID of the file system for which you are creating the LifecycleConfiguration object (String).
     */
    FileSystemId: FileSystemId;
    /**
     * An array of LifecyclePolicy objects that define the file system's LifecycleConfiguration object. A LifecycleConfiguration object tells lifecycle management when to transition files from the Standard storage class to the Infrequent Access storage class.
     */
    LifecyclePolicies: LifecyclePolicies;
  }
  export type ResourceId = string;
  export interface RootDirectory {
    /**
     * Specifies the path on the EFS file system to expose as the root directory to NFS clients using the access point to access the EFS file system. A path can have up to four subdirectories. If the specified path does not exist, you are required to provide the CreationInfo.
     */
    Path?: Path;
    /**
     * (Optional) Specifies the POSIX IDs and permissions to apply to the access point's RootDirectory. If the RootDirectory &gt; Path specified does not exist, EFS creates the root directory using the CreationInfo settings when a client connects to an access point. When specifying the CreationInfo, you must provide values for all properties.   If you do not provide CreationInfo and the specified RootDirectory &gt; Path does not exist, attempts to mount the file system using the access point will fail. 
     */
    CreationInfo?: CreationInfo;
  }
  export type SecondaryGids = Gid[];
  export type SecurityGroup = string;
  export type SecurityGroups = SecurityGroup[];
  export type SubnetId = string;
  export interface Tag {
    /**
     * The tag key (String). The key can't start with aws:.
     */
    Key: TagKey;
    /**
     * The value of the tag key.
     */
    Value: TagValue;
  }
  export type TagKey = string;
  export type TagKeys = TagKey[];
  export interface TagResourceRequest {
    /**
     * The ID specifying the EFS resource that you want to create a tag for. 
     */
    ResourceId: ResourceId;
    /**
     * 
     */
    Tags: Tags;
  }
  export type TagValue = string;
  export type Tags = Tag[];
  export type ThroughputMode = "bursting"|"provisioned"|string;
  export type Timestamp = Date;
  export type Token = string;
  export type TransitionToIARules = "AFTER_7_DAYS"|"AFTER_14_DAYS"|"AFTER_30_DAYS"|"AFTER_60_DAYS"|"AFTER_90_DAYS"|string;
  export type Uid = number;
  export interface UntagResourceRequest {
    /**
     * Specifies the EFS resource that you want to remove tags from.
     */
    ResourceId: ResourceId;
    /**
     * The keys of the key:value tag pairs that you want to remove from the specified EFS resource.
     */
    TagKeys: TagKeys;
  }
  export interface UpdateFileSystemRequest {
    /**
     * The ID of the file system that you want to update.
     */
    FileSystemId: FileSystemId;
    /**
     * (Optional) The throughput mode that you want your file system to use. If you're not updating your throughput mode, you don't need to provide this value in your request. If you are changing the ThroughputMode to provisioned, you must also set a value for ProvisionedThroughputInMibps.
     */
    ThroughputMode?: ThroughputMode;
    /**
     * (Optional) The amount of throughput, in MiB/s, that you want to provision for your file system. Valid values are 1-1024. Required if ThroughputMode is changed to provisioned on update. If you're not updating the amount of provisioned throughput for your file system, you don't need to provide this value in your request. 
     */
    ProvisionedThroughputInMibps?: ProvisionedThroughputInMibps;
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2015-02-01"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the EFS client.
   */
  export import Types = EFS;
}
export = EFS;